export default function PlaceholderImage({ title, className }: { title: string; className?: string }) {
  return (
    <div className={`bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center ${className}`}>
      <h3 className="text-white text-2xl font-bold text-center px-4">{title}</h3>
    </div>
  );
}