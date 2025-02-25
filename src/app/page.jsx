

import Header from '@/components/header/header'
import { Services } from '@/components/professional-services/services'
import { ReserveMap } from '@/components/reserve-map/reserveMap'
import { Reserved } from '@/components/reserved-car/reserved'

function HomePage() {
  return (
    <div>
      <Header/>
      <Services/>
      <Reserved/>
      <ReserveMap/>
    </div>
  )
}

export default HomePage