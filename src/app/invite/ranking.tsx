import Image from 'next/image'

import medal_cooper from '../../assets/medal_cooper.svg'
import medal_gold from '../../assets/medal_gold.svg'
import medal_silver from '../../assets/medal_silver.svg'

export default function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-5">
        <div className="relative bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 rounded-xl">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1°</span> | André Souza
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1.128
          </span>

          <Image
            src={medal_gold}
            alt="medal_gold"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 rounded-xl">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2°</span> | Melissa Loures
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            928
          </span>

          <Image
            src={medal_silver}
            alt="medal_silver"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 rounded-xl">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3°</span> | Rodrigo Gonçalves
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            875
          </span>

          <Image
            src={medal_cooper}
            alt="medal_cooper"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
