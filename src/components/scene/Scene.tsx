"use client";

import { Canvas } from "@react-three/fiber";
import { WebGPURenderer } from "three/webgpu";
import { NeutralToneMapping } from "three";
import { SceneBoundary } from "./SceneBoundary";
import { Platform } from "./Platform";

export function Scene() {
  return (
    <SceneBoundary>
      <Canvas
        gl={async ({ canvas }) => {
          const renderer = new WebGPURenderer({
            canvas: canvas as HTMLCanvasElement,
            antialias: true,
          });
          await renderer.init();
          return renderer;
        }}
        camera={{ position: [0, 6, 11], fov: 30 }}
        shadows="percentage"
        onCreated={({ gl }) => {
          gl.toneMapping = NeutralToneMapping;
        }}
      >
        <hemisphereLight args={["#ffffff", "#94a3b8", 1.5]} />
        <directionalLight position={[5, 10, 7]} intensity={2.5} />
        <Platform />
      </Canvas>
    </SceneBoundary>
  );
}
