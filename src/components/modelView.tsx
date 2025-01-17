import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { RefObject, Suspense } from "react";
import * as THREE from "three";
import { OrbitControls as OrbitControlsType } from "three/examples/jsm/controls/OrbitControls.js";

import { Iphone } from "./iphone";
import { Lights } from "./lights";
import { Loader } from "./loader";

interface ModelItem {
  title: string;
  color: string[];
  img: string;
}

interface ModelViewProps {
  index: number;
  groupRef: RefObject<THREE.Group>;
  gsapType: string;
  controlRef: RefObject<typeof OrbitControls>;
  setRotationState: (rotation: number) => void;
  size: "small" | "large";
  item: ModelItem;
}

export const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}: ModelViewProps) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`absolute h-full w-full ${index === 2 ? "right-[-100%]" : ""} `}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <OrbitControls
        makeDefault
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={controlRef as any}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => {
          const controls = controlRef.current as unknown as OrbitControlsType;
          setRotationState(controls.getAzimuthalAngle());
        }}
      />

      <group
        ref={groupRef}
        name={`${index === 1 ? "small" : "large"}`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <Iphone
            item={item}
            size={size}
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
          />
        </Suspense>
      </group>
    </View>
  );
};
