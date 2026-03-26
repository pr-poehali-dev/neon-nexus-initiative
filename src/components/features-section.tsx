import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Профиль ученика",
    description: "Воронов Илья — ученик 10 класса. Целеустремлён, активно занимается спортом. Нуждается в структурированном плане для успешной сдачи переводных экзаменов.",
    icon: "User",
    badge: "Профиль",
  },
  {
    title: "Главная цель",
    description: "Сдать переводные экзамены и поступить в 11 класс. Достижение цели требует системной подготовки по ключевым предметам в течение учебного года.",
    icon: "Target",
    badge: "Цель",
  },
  {
    title: "Запасной вариант",
    description: "В случае неудачи на экзаменах — поступление в спортивный резерв. Спортивная карьера как равноценная и уважаемая альтернатива.",
    icon: "Trophy",
    badge: "Альтернатива",
  },
  {
    title: "Академическая подготовка",
    description: "Еженедельные занятия по профильным предметам, дополнительные консультации с учителями и самостоятельная работа по расписанию.",
    icon: "BookOpen",
    badge: "Учёба",
  },
  {
    title: "Спортивная подготовка",
    description: "Сохранение тренировочного режима параллельно с учёбой. Спорт как ресурс — формирует дисциплину и устойчивость к нагрузкам.",
    icon: "Dumbbell",
    badge: "Спорт",
  },
  {
    title: "Контроль прогресса",
    description: "Ежемесячная самооценка результатов, промежуточные срезы знаний, корректировка плана в зависимости от динамики успеваемости.",
    icon: "BarChart2",
    badge: "Мониторинг",
  },
]

export function FeaturesSection() {
  return (
    <section id="slide1" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Слайд 1 — Профиль и цели</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ключевые направления индивидуального образовательного маршрута Воронова Ильи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon name={feature.icon} size={24} className="text-primary" fallback="Star" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-foreground text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
