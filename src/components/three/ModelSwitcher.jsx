import { PresentationControls } from '@react-three/drei';
import {useRef} from 'react';
import MacbookModel14 from '../models/Macbook-14';

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 0.5;

const fadeMeshes = (group, opacity) => {
    if(!group) return;

    group.traverse((child)=>{
        if(child.isMesh){
            child.transparent = true;
            gsap.to(child.material, {opacity: opacity, duration: ANIMATION_DURATION});
        }
    })
}

const ModelSwitcher = ({scale, isMobile}) => {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const shoLargeMacbook = scale === 0.08 || scale === 0.05;

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity]
    }

    return (
        <>
        <PresentationControls {...controlsConfig}>
            <group ref={largeMacbookRef}>
                <MacbookModel14 scale={isMobile ? 0.05 : 0.08} />
            </group>
        </PresentationControls>

        <PresentationControls {...controlsConfig}>
            <group ref={smallMacbookRef}>
                <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
            </group>
        </PresentationControls>   
        </>
    )
}

export default ModelSwitcher;