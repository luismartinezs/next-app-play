const SkeletonCard = () => {
	return (
		<div className="card animate-pulse h-[90px] w-[140px]">
			<div className="w-full h-6 bg-gray-700 rounded mb-2"></div>
			<div className="w-full h-6 bg-gray-700 rounded-full"></div>
		</div>
	);
};

export const SkeletonList = ({ count }: { count: number }) => {
	return (
		<div className="flex gap-4 flex-wrap">
			{Array.from({ length: count }).map((_, index) => (
				<SkeletonCard key={index} />
			))}
		</div>
	);
};