import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Что такое ИОМ и зачем он нужен?",
      answer:
        "Индивидуальный образовательный маршрут — это персональный план учёбы, составленный под конкретного ученика. Он учитывает цели, уровень знаний и интересы. Для Ильи ИОМ помогает структурировать подготовку к переводным экзаменам.",
    },
    {
      question: "Какие предметы входят в переводные экзамены?",
      answer:
        "Перечень переводных экзаменов определяется школой. Как правило, это ключевые предметы: русский язык, математика и один-два профильных предмета. Конкретный список уточняется у классного руководителя.",
    },
    {
      question: "Как совмещать спорт и подготовку к экзаменам?",
      answer:
        "Главное — чёткое расписание. Тренировки 3–4 раза в неделю, учёба в свободное время. Спорт не мешает учёбе — он развивает дисциплину и помогает выдерживать нагрузку. Нужно грамотно распределить приоритеты.",
    },
    {
      question: "Что если экзамены не будут сданы?",
      answer:
        "Поступление в спортивный резерв — это полноценный, достойный путь. Профессиональный спорт открывает серьёзные перспективы. ИОМ предусматривает оба варианта, и ни один из них не является провалом.",
    },
    {
      question: "Как отслеживать прогресс по маршруту?",
      answer:
        "Раз в месяц — промежуточная самооценка: что успел, что сложно, что нужно скорректировать. Также проводятся пробные контрольные работы в формате переводных экзаменов для понимания реального уровня готовности.",
    },
    {
      question: "Кто участвует в реализации ИОМ?",
      answer:
        "Три ключевых участника: Илья (главный исполнитель), классный руководитель (координатор и куратор) и тренер (поддержка спортивного направления). При необходимости подключаются учителя-предметники.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Вопросы по маршруту</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на частые вопросы об индивидуальном образовательном маршруте Воронова Ильи.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
