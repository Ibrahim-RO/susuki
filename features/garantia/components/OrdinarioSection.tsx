import { services } from '../data/ordinaria'
import { ServiceCard } from './ServiceCard'

export default function OrdinarioSection() {
    return (
        <>            
            <h3 className='text-lg md:text-xl font-bold'>Servicios básicos kilómetro cero</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {services.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                ))}
            </div>
        </>
    )
}
