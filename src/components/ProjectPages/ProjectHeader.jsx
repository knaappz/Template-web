import BackBTN from "../Buttons/BackBTN"
import NextBTN from "../Buttons/NextBTN"

export default function ProjectHeader({ projectName }) {
  return (
    <div className='project-header'>
        <BackBTN/>
        <h1>{projectName}</h1>
        <NextBTN/>

      </div>
)
}