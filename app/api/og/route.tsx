import { ImageResponse } from 'next/og'
import Image from 'next/image'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title')

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`}
          alt='VM Power Deck Logo'
          width={200}
          height={200}
        />
        <div style={{ marginTop: 40 }}>{title}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
