import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { getProjects } from '@/lib/api'

export default async function FeaturedProjects() {
  const projects = await getProjects()

  return (
    <section className='section-padding bg-muted relative overflow-hidden'>
      <div className='container mx-auto container-padding relative z-10'>
        <h2 className='text-3xl font-bold text-center mb-4 text-blue-900'>
          Featured Projects
        </h2>
        <p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
          Explore our portfolio of stunning outdoor transformations and get
          inspired for your next project.
        </p>
        <Carousel className='w-full max-w-5xl mx-auto'>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className='md:basis-1/2 lg:basis-1/3'
              >
                <Card className='overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                  <CardContent className='p-0'>
                    <div className='relative'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
                        loading='lazy'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        quality={80}
                        // Add blur placeholder for better UX during loading
                        placeholder='blur'
                        blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM3Nzc3NzciLz48L3N2Zz4='
                        // Add decoding async for better performance
                        decoding='async'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </div>
                    <div className='p-6'>
                      <h3 className='text-xl font-semibold mb-2'>
                        {project.title}
                      </h3>
                      <p className='text-muted-foreground mb-4'>
                        {project.description}
                      </p>
                      <Link href={`/projects`}>
                        <Button variant='outline' className='w-full'>
                          View Projects
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className='absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse'></div>
    </section>
  )
}
