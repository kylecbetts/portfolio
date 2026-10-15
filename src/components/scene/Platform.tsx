const RADIUS: number = 3.0;
const HEIGHT: number = 0.25;

export function Platform() {
  return (
    <mesh position-y={-HEIGHT / 2}>
      <cylinderGeometry
        args={[RADIUS, RADIUS, HEIGHT, 6, 1, false, Math.PI / 6]}
      />
      <meshStandardMaterial color="#eef2f6" roughness={0.5} flatShading />
    </mesh>
  );
}
