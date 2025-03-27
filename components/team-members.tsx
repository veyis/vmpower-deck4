import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getTeamMembers } from '@/lib/api'

export async function TeamMembers() {
  const teamMembers = await getTeamMembers()

  return (
    <section className='section-padding bg-background relative overflow-hidden'>
      <div className='container mx-auto container-padding relative z-10'>
        <h2 className='text-3xl font-bold text-center mb-4 text-blue-900'>
          Meet Our Team
        </h2>
        <p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
          Our experienced professionals are dedicated to bringing your outdoor
          dreams to life.
        </p>
        <div className='grid gap-8 md:grid-cols-3'>
          {teamMembers.map((member) => (
            <HoverCard key={member.name}>
              <HoverCardTrigger asChild>
                <Button variant='ghost' className='w-full h-full p-0'>
                  <Card className='w-full h-full'>
                    <CardContent className='p-6 flex flex-col items-center'>
                      <Avatar className='w-24 h-24 mb-4'>
                        <AvatarImage
                          src={member.image}
                          alt={member.name}
                          loading='lazy'
                          width={96}
                          height={96}
                        />
                        <AvatarFallback>
                          {member.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className='text-xl font-semibold mb-1'>
                        {member.name}
                      </h3>
                      <p className='text-sm text-muted-foreground'>
                        {member.role}
                      </p>
                    </CardContent>
                  </Card>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className='w-80'>
                <div className='flex justify-between space-x-4'>
                  <Avatar>
                    <AvatarImage
                      src={member.image}
                      alt={member.name}
                      loading='lazy'
                      width={40}
                      height={40}
                    />
                    <AvatarFallback>
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className='space-y-1'>
                    <h4 className='text-sm font-semibold'>{member.name}</h4>
                    <p className='text-sm'>{member.role}</p>
                    <div className='flex items-center pt-2'>
                      <span className='text-xs text-muted-foreground'>
                        {member.bio}
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse'></div>
    </section>
  )
}
