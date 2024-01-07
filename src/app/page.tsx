import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <div className="mx-auto flex h-screen max-w-xs flex-col justify-center">
      <div className="text-2xl font-bold">Next.js 14 - Boilerplate</div>
      <Separator className="my-4" />
      <a
        className="text-primary"
        href="https://github.com/05akalan57"
        target="_blank"
      >
        Muhammet Emin Akalan
      </a>
    </div>
  )
}
