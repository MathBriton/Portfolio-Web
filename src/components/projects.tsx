import { Github } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/data/projects";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/language-provider";

function ProjectCard({ project }: { project: Project }) {
  const { t, language } = useLanguage();
  const { repo, demo } = project.links;

  return (
    <Card className="animated-border relative h-full overflow-hidden hover:border-primary">
      <div className="relative aspect-video bg-muted">
        <img
          src={project.image}
          alt={project.title[language]}
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
        />
        {repo && (
          <span className="absolute right-2 top-2 z-10 rounded-md bg-background/80 p-1.5 text-muted-foreground backdrop-blur">
            <Github className="size-4" />
          </span>
        )}
      </div>
      <CardContent>
        <h3 className="font-semibold">
          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title[language]} — ${t("btn_repo")}`}
              className="outline-none after:absolute after:inset-0 focus-visible:underline"
            >
              {project.title[language]}
            </a>
          ) : (
            project.title[language]
          )}
        </h3>
        <p className="text-sm leading-snug text-muted-foreground">
          {project.summary[language]}
        </p>
        <ul
          aria-label={t("aria_stack")}
          className="mt-1 flex flex-wrap gap-1.5"
        >
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
        {demo && (
          <div className="relative z-10 mt-2 flex gap-2">
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "default", size: "sm" })}
            >
              {t("btn_demo")}
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [snaps, setSnaps] = useState<number[]>([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setSnaps(api.scrollSnapList());
      setSelected(api.selectedScrollSnap());
    };
    update();
    api.on("reInit", update);
    api.on("select", update);
    return () => {
      api.off("reInit", update);
      api.off("select", update);
    };
  }, [api]);

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);

  return (
    <Section id="projetos" title={t("section_projects_title")} panel>
      <Carousel
        setApi={setApi}
        options={{ slidesToScroll: "auto" }}
        aria-label={t("aria_carousel")}
      >
        <div className="flex items-center gap-3">
          <CarouselPrevious label={t("aria_carousel_prev")} />
          <CarouselContent className="flex-1 py-1">
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext label={t("aria_carousel_next")} />
        </div>

        {snaps.length > 1 && (
          <div className="mt-4 flex justify-center gap-2">
            {snaps.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`${t("section_projects_title")} ${index + 1}`}
                aria-current={index === selected}
                onClick={() => scrollTo(index)}
                className={cn(
                  "size-2 rounded-sm border border-border transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  index === selected && "border-primary bg-primary",
                )}
              />
            ))}
          </div>
        )}
      </Carousel>

      <Footer />
    </Section>
  );
}
