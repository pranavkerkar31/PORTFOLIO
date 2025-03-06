import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
}

export default function Projects({ title, description, image, buttonText, link }: ProjectProps) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions w-full">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
