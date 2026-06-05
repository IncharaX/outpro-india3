import { Surface } from "./surface";
import Image from "next/image";


      <div className="relative aspect-video overflow-hidden rounded-t-3xl">
  <Image
    src={image}
    alt={title}
    fill
    className="object-cover transition-transform duration-300 hover:scale-105"
  />
</div>

      <div className="p-8">
        <p className="text-sm font-medium text-primary">
          {category}
        </p>

        <h3 className="mt-4 text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-6 text-lg font-medium">
          {result}
        </p>
      </div>
    </Surface>
  );
}