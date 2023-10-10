import { cn } from "@/lib/utils"
import Image from "next/image";

interface LogoComponentProps {
    width:number;
    height:number;
    alt:string;
    img:string;
}

const LogoComponent = ({width,height,alt,img}: LogoComponentProps) => {
  return (
    <div className={cn(`relative`)}>
        <Image src={img} width={width} height={height} alt={alt} className='rounded-full'/>
    </div>    
  )
}

export default LogoComponent