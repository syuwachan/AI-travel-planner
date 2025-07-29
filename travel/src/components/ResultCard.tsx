
type ResultCardProps = {
	title: string;
	description: string;
	images: string;
};

export default function ResultCard({
	title,
	description,
	images
}: ResultCardProps) {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden">
			<img 
				src={images} 
				alt={title}
				className="w-full h-48 object-cover"
			/>
			<div className="p-4">
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="text-gray-600">{description}</p>
			</div>
		</div>
	);
}