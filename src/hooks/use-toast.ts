// src/hooks/use-toast.ts
import { useEffect, useState } from "react"

export type SimpleToast = {
  id?: string | number
  title?: string
  description?: string
}

type Listener = (t: SimpleToast) => void
const listeners = new Set<Listener>()

export function toast(t: SimpleToast) {
  listeners.forEach((fn) => fn(t))
}

export function useToast() {
  const [toasts, setToasts] = useState<SimpleToast[]>([])

  useEffect(() => {
    const onNew: Listener = (t) => {
      setToasts((prev) => [...prev, { id: Date.now() + Math.random(), ...t }])
    }
    listeners.add(onNew)
    return () => {
      listeners.delete(onNew)
    }
  }, [])

  function dismiss(id: string | number) {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return { toasts, dismiss }
}
