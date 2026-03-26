import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Классный руководитель",
    role: "Куратор маршрута",
    initials: "КР",
    content:
      "Илья показывает не плохой подход к учебе. При системной работе сдача переводных экзаменов вполне достижима — он на правильном пути.",
  },
  {
    name: "Тренер",
    role: "Спортивный наставник",
    initials: "ТР",
    content:
      "Дисциплина и настойчивость — главные качества Ильи. Спорт воспитал в нём умение работать на результат, что поможет и в учёбе.",
  },
  {
    name: "Воронов Илья",
    role: "Ученик, 10 класс",
    initials: "ВИ",
    content:
      "Я хочу попасть в 11 класс и готов работать для этого. Если не получится — спортивный резерв тоже хороший вариант. Главное — не останавливаться.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="slide3" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Слайд 3 — Голоса участников</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Взгляды ключевых участников образовательного маршрута Ильи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-red-500/20 text-red-400 font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}