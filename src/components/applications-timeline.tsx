import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Слайд 1 — Старт и диагностика",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Начало маршрута: определение исходного уровня знаний, постановка целей и составление индивидуального плана
            подготовки. Акцент на самоорганизацию и понимание собственных сильных сторон.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Диагностические контрольные по ключевым предметам
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Согласование маршрута с классным руководителем
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Составление недельного расписания: учёба + спорт
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Слайд 2 — Основной этап подготовки",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Системная подготовка к переводным экзаменам: регулярные занятия, работа над пробелами в знаниях,
            промежуточные срезы и корректировка плана. Сохранение спортивного режима тренировок.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Еженедельные консультации с учителями по сложным темам
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Пробные тесты в формате переводных экзаменов
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Параллельные тренировки — не менее 3 раз в неделю
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Слайд 3 — Итог и выбор пути",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Переводные экзамены и принятие итогового решения. Успешная сдача — поступление в 11 класс.
            Альтернативный путь — спортивный резерв, который также является сильным и перспективным выбором.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Путь А: сдал экзамены — 11 класс и аттестат
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Путь Б: спортивный резерв — профессиональная карьера в спорте
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Оба пути — достойные варианты развития для Ильи
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="slide2" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Слайд 2 — Этапы маршрута</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три ключевых этапа индивидуального образовательного маршрута Воронова Ильи — от старта до результата.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
