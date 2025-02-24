

import Header from '@/components/header/header'
import { Services } from '@/components/professional-services/services'
import { Reserved } from '@/components/reserved-car/reserved'

function HomePage() {
  return (
    <div>
      <Header/>
      <Services/>
      <Reserved/>
    </div>
  )
}

export default HomePage