export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              ИОМ<span className="text-red-500"> Воронова Ильи</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-4 max-w-md">
              Индивидуальный образовательный маршрут на 10–11 класс. Цель: сдать переводные экзамены и продолжить образование.
            </p>
            <p className="font-space-mono text-gray-500 text-sm">
              Составлен совместно с классным руководителем и тренером.
            </p>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#slide1" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Слайд 1 — Профиль
                </a>
              </li>
              <li>
                <a href="#slide2" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Слайд 2 — Этапы
                </a>
              </li>
              <li>
                <a href="#slide3" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Слайд 3 — Итог
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Вопросы
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">ИОМ составлен в 2025 году. Воронов Илья, 10 класс.</p>
            <p className="font-space-mono text-gray-600 text-sm mt-2 md:mt-0">Оба пути ведут к успеху.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
