export default function CertificationCard({ title, platform, year }: { title: string; platform: string; year: string }) {
    return (
      <div className="w-full max-w-sm p-6 border-2 border-white rounded-lg text-white bg-black/40 backdrop-blur-md">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-400">{platform}</p>
        <span className="inline-block mt-3 px-3 py-1 text-sm font-semibold bg-gray-800 rounded-md">{year}</span>
      </div>
    );
  }
  