import { useLocation } from 'react-router-dom';
import { OrbitControls, CameraShake } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import { Particles } from './Particles';
import { Canvas } from '@react-three/fiber';

import * as THREE from 'three';
import { extend } from '@react-three/fiber';

extend(THREE);

export function ControllableParticles() {
    const props = useControls({
        focus: { value: 5.9, min: 3, max: 7, step: 0.01 },
        speed: { value: 11.8, min: 0.1, max: 100, step: 0.1 },
        aperture: { value: 5.6, min: 1, max: 5.6, step: 0.1 },
        fov: { value: 54, min: 0, max: 200 },
        curl: { value: 0.02, min: 0.01, max: 0.5, step: 0.01 },
    });
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className={`background ${isHome ? 'active' : ''}`}>
            <div className='control-box'>
                <Leva collapsed={true} />
                <pre className='hide'>{JSON.stringify(props, null, '  ')}</pre>
            </div>
            <Canvas linear='true' camera={{ fov: 25, position: [0, 0, 6] }}>
                <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} zoomSpeed={0.1} />
                <CameraShake
                    yawFrequency={1}
                    maxYaw={0.05}
                    pitchFrequency={1}
                    maxPitch={0.05}
                    rollFrequency={0.5}
                    maxRoll={0.5}
                    intensity={0.2}
                />
                <Particles {...props} />
            </Canvas>
        </div>
    );
}
