import Banner from '@/components/home/Banner'
import ForParent from '@/components/home/ForParent'
import Forschool from '@/components/home/Forschool'
import Glassmore from '@/components/home/Glassmore'
import Learnig from '@/components/home/Learnig'

import PerfectTutor from '@/components/home/PerfectTutor'
import TuitionProgram from '@/components/home/TuitionProgram'
import Virtual from '@/components/home/Virtual'


const page = () => {
  return (
    <div>
      <Banner />
      <Virtual />
      <PerfectTutor />
      <TuitionProgram />
      <ForParent />
      <Forschool />
      <Learnig />
      <Glassmore/>
    
    </div>
  )
}

export default page

