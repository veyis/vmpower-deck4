'use client'

import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export function MaterialRecommendationTool() {
  const [budget, setBudget] = React.useState([50])
  const [climate, setClimate] = React.useState('moderate')
  const [maintenance, setMaintenance] = React.useState('medium')

  const getRecommendation = () => {
    let recommendation = ''
    if (budget[0] <= 30) {
      recommendation = 'Pressure-Treated Wood'
    } else if (budget[0] <= 60) {
      recommendation =
        climate === 'humid' ? 'Composite Decking' : 'Cedar &amp; Redwood'
    } else {
      recommendation =
        maintenance === 'low'
          ? 'PVC/Vinyl Decking'
          : 'Hardwood (Ipe, Teak, Mahogany)'
    }
    return recommendation
  }

  return (
    <section className='mb-12'>
      <h2 className='text-3xl font-bold mb-4 text-blue-900'>
        Material Recommendation Tool
      </h2>
      <Card>
        <CardHeader>
          <CardTitle className='text-blue-900'>
            Find Your Ideal Decking Material
          </CardTitle>
          <CardDescription>
            Answer a few questions to get a personalized recommendation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-6'>
            <div>
              <Label htmlFor='budget'>Budget (per square foot)</Label>
              <Slider
                id='budget'
                min={0}
                max={100}
                step={1}
                value={budget}
                onValueChange={setBudget}
                className='mt-2'
              />
              <p className='text-sm text-muted-foreground mt-1'>
                Selected: ${budget[0]}
              </p>
            </div>
            <div>
              <Label>Climate</Label>
              <RadioGroup
                value={climate}
                onValueChange={setClimate}
                className='mt-2'
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='dry' id='dry' />
                  <Label htmlFor='dry'>Dry</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='moderate' id='moderate' />
                  <Label htmlFor='moderate'>Moderate</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='humid' id='humid' />
                  <Label htmlFor='humid'>Humid</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label>Desired Maintenance Level</Label>
              <RadioGroup
                value={maintenance}
                onValueChange={setMaintenance}
                className='mt-2'
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='low' id='low' />
                  <Label htmlFor='low'>Low</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='medium' id='medium' />
                  <Label htmlFor='medium'>Medium</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='high' id='high' />
                  <Label htmlFor='high'>High</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div>
            <p className='font-semibold'>Recommended Material:</p>
            <p className='text-lg text-primary'>{getRecommendation()}</p>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
