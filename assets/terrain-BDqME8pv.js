import{D as e,k as t}from"./index-C1vzQtOY.js";import{Dt as n,Pn as r,Rt as i,Vn as a,h as o,nr as s,s as c,vr as l,vt as u,xt as d,yr as f}from"./three.core-CKoySubT.js";import{n as p,t as m}from"./assetStatus-BtsR6pYG.js";var h=t({ALL_LAYERS:()=>A,LAYER_SIZE:()=>g,NAJD_EARTH:()=>v,OASIS_GROUND:()=>D,PLAIN_GROUND:()=>k,PLAIN_LAYERS:()=>O,groundMaterial:()=>F,groundReady:()=>E,loadGround:()=>T,nearPath:()=>z,oasisFloor:()=>R,paintGround:()=>I,paintNoise:()=>L,towards:()=>y}),g={sandy_gravel_02:2.5,gravelly_sand:2.5,brown_mud_dry:1.3,brown_mud_02:1.3,damp_sand:2,mud_cracked_dry_03:1.5,clay_block_wall:2},_={sandy_gravel_02:`#997351`,gravelly_sand:`#926e4c`,brown_mud_dry:`#735a3d`,brown_mud_02:`#4d4436`,damp_sand:`#7c5e37`,mud_cracked_dry_03:`#cfa981`,clay_block_wall:`#826646`},v={sandy_gravel_02:`#d0b48d`,gravelly_sand:`#c4a882`,brown_mud_dry:`#a68b6c`,brown_mud_02:`#6e5c48`,damp_sand:`#a08a6c`,mud_cracked_dry_03:`#cbb79a`,clay_block_wall:`#b39672`};function y(e,t=v[e]){let n=new o(_[e]),r=new o(t);return new o(r.r/Math.max(.001,n.r),r.g/Math.max(.001,n.g),r.b/Math.max(.001,n.b))}var b={sandy_gravel_02:.96,gravelly_sand:.93,brown_mud_dry:.95,brown_mud_02:.9,damp_sand:.82,mud_cracked_dry_03:.9,clay_block_wall:.95},x=new Map,S=new s;function C(t){let n=x.get(t);if(!n){let i=async(n,i)=>{let o=await S.loadAsync(e(`/terrain/${t}_${n}.webp`));return o.wrapS=o.wrapT=r,o.colorSpace=i?a:``,o.anisotropy=8,o.userData.shared=!0,o};n=Promise.all([i(`albedo`,!0),i(`nh`,!1)]).then(([e,t])=>({albedo:e,relief:t})),n.catch(()=>x.delete(t)),x.set(t,n)}return n}var w=new Map;async function T(e=A){try{let t=await Promise.all(e.map(C));return e.forEach((e,n)=>w.set(e,t[n])),p(`ground`),new Map(e.map((e,n)=>[e,t[n]]))}catch(e){return m(`ground photographs`,e,`the older single sand photograph`),null}}function E(e){return e.every(e=>w.has(e))?w:null}var D={layers:[`sandy_gravel_02`,`gravelly_sand`,`brown_mud_dry`,`brown_mud_02`],variation:1},O=[`sandy_gravel_02`,`gravelly_sand`,`clay_block_wall`],k={layers:[`sandy_gravel_02`,`gravelly_sand`,`sandy_gravel_02`,`gravelly_sand`],variation:1.2,single:!0},A=[`sandy_gravel_02`,`gravelly_sand`,`brown_mud_dry`,`brown_mud_02`,`damp_sand`,`mud_cracked_dry_03`],j=`
  attribute vec4 splat;
  attribute float wet;
  varying vec4 vSplat;
  varying float vWet;
  varying vec3 vGroundWorld;
  varying vec3 vGroundNormal;
`,M=`
  vSplat = splat;
  vWet = wet;
  vGroundWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
  vGroundNormal = normalize( mat3( modelMatrix ) * objectNormal );
`,N=`
  uniform sampler2D groundA0; uniform sampler2D groundA1; uniform sampler2D groundA2; uniform sampler2D groundA3;
  uniform sampler2D groundN0; uniform sampler2D groundN1; uniform sampler2D groundN2; uniform sampler2D groundN3;
  uniform vec4 groundSize;
  uniform vec4 groundRough;
  uniform vec3 groundTint[ 4 ];
  uniform float groundRelief;
  uniform float groundVariation;
  varying vec4 vSplat;
  varying float vWet;
  varying vec3 vGroundWorld;
  varying vec3 vGroundNormal;

  float groundHash( vec2 p ) { return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453 ); }
  float groundNoise( vec2 p ) {
    vec2 i = floor( p ), f = fract( p );
    vec2 u = f * f * ( 3.0 - 2.0 * f );
    return mix( mix( groundHash( i ), groundHash( i + vec2( 1.0, 0.0 ) ), u.x ), mix( groundHash( i + vec2( 0.0, 1.0 ) ), groundHash( i + vec2( 1.0, 1.0 ) ), u.x ), u.y );
  }
  // A layer at a point: its colour, and its normal (tangent space) with its height in w. The second sample is turned
  // by 0.73 rad and scaled; its normal is turned back.
  void groundLayer( sampler2D albedoMap, sampler2D reliefMap, vec2 at, float size, float mixer, out vec3 albedo, out vec4 relief ) {
    vec2 uv = at / size;
    vec3 a = texture2D( albedoMap, uv ).rgb;
    vec3 r = texture2D( reliefMap, uv ).rgb;
    #ifndef GROUND_SINGLE
      const mat2 turn = mat2( 0.7446, 0.6675, -0.6675, 0.7446 );
      vec2 uv2 = turn * uv * 0.61 + vec2( 0.37, 0.71 );
      vec3 a2 = texture2D( albedoMap, uv2 ).rgb;
      vec3 r2 = texture2D( reliefMap, uv2 ).rgb;
      vec2 n2 = r2.xy * 2.0 - 1.0;
      n2 = vec2( 0.7446 * n2.x - 0.6675 * n2.y, 0.6675 * n2.x + 0.7446 * n2.y );
      a = mix( a, a2, mixer );
      r = vec3( mix( r.xy * 2.0 - 1.0, n2, mixer ) * 0.5 + 0.5, mix( r.z, r2.z, mixer ) );
    #endif
    vec2 nxy = r.xy * 2.0 - 1.0;
    relief = vec4( nxy, sqrt( max( 0.0, 1.0 - dot( nxy, nxy ) ) ), r.z );
    albedo = a;
  }
`,P=`
  vec2 groundAt = vec2( vGroundWorld.x, -vGroundWorld.z );
  float groundMixer = smoothstep( 0.25, 0.75, groundNoise( groundAt * 0.21 ) * 0.65 + groundNoise( groundAt * 0.53 + 7.3 ) * 0.35 );
  vec3 albedo0, albedo1, albedo2, albedo3;
  vec4 relief0, relief1, relief2, relief3;
  groundLayer( groundA0, groundN0, groundAt, groundSize.x, groundMixer, albedo0, relief0 );
  groundLayer( groundA1, groundN1, groundAt, groundSize.y, groundMixer, albedo1, relief1 );
  groundLayer( groundA2, groundN2, groundAt, groundSize.z, groundMixer, albedo2, relief2 );
  groundLayer( groundA3, groundN3, groundAt, groundSize.w, groundMixer, albedo3, relief3 );
  // Height-weighted blend: whichever is higher where both are laid shows; the rest settles into its hollows.
  vec4 weights = max( vSplat, vec4( 0.0 ) );
  weights /= max( 1e-4, weights.x + weights.y + weights.z + weights.w );
  vec4 heights = vec4( relief0.w, relief1.w, relief2.w, relief3.w );
  vec4 lifted = weights * 1.6 + heights * step( 0.001, weights ) * 0.55;
  float top = max( max( lifted.x, lifted.y ), max( lifted.z, lifted.w ) );
  vec4 blend = max( lifted - ( top - 0.22 ), vec4( 0.0 ) ) * step( 0.001, weights );
  blend /= max( 1e-4, blend.x + blend.y + blend.z + blend.w );
  vec3 groundColour = albedo0 * groundTint[ 0 ] * blend.x + albedo1 * groundTint[ 1 ] * blend.y + albedo2 * groundTint[ 2 ] * blend.z + albedo3 * groundTint[ 3 ] * blend.w;
  vec3 groundTangentNormal = normalize( relief0.xyz * blend.x + relief1.xyz * blend.y + relief2.xyz * blend.z + relief3.xyz * blend.w );
  float groundHeight = dot( heights, blend );
  float groundRoughness = dot( groundRough, blend );
  // Colour over tens of metres: the earth is never one shade.
  float broad = groundNoise( groundAt * 0.045 ) * 0.6 + groundNoise( groundAt * 0.13 + 3.1 ) * 0.4;
  groundColour *= 1.0 + ( broad - 0.5 ) * 0.22 * groundVariation;
  groundColour = mix( groundColour, groundColour * vec3( 1.04, 0.99, 0.93 ), ( groundNoise( groundAt * 0.07 + 11.0 ) - 0.5 ) * groundVariation );
  // Wet: darker and a little richer, glossy; the hollows fill first, then it stands as a film.
  float wetness = clamp( vWet + ( 0.5 - groundHeight ) * 0.25 * step( 0.02, vWet ), 0.0, 1.0 );
  groundColour = mix( groundColour, groundColour * groundColour * 1.25 + groundColour * 0.18, wetness * 0.85 );
  groundRoughness = mix( groundRoughness, 0.32, wetness * wetness );
  groundTangentNormal = normalize( mix( groundTangentNormal, vec3( 0.0, 0.0, 1.0 ), smoothstep( 0.7, 1.0, wetness ) * 0.85 ) );
  groundTangentNormal.xy *= groundRelief;
  float groundCavity = mix( 0.55, 1.0, smoothstep( 0.05, 0.55, groundHeight ) );
  diffuseColor.rgb *= groundColour;
`;function F(e,t){let r=new n({color:`#ffffff`,roughness:1,metalness:0}),i=n=>e.get(t.layers[n]),a={groundA0:{value:i(0).albedo},groundA1:{value:i(1).albedo},groundA2:{value:i(2).albedo},groundA3:{value:i(3).albedo},groundN0:{value:i(0).relief},groundN1:{value:i(1).relief},groundN2:{value:i(2).relief},groundN3:{value:i(3).relief},groundSize:{value:new f(...t.layers.map((e,n)=>t.sizes?.[n]??g[e]))},groundRough:{value:new f(...t.layers.map(e=>b[e]))},groundTint:{value:t.layers.map((e,n)=>y(e,t.tints?.[n]))},groundRelief:{value:t.relief??1},groundVariation:{value:t.variation??1}};return r.userData.ground=a,r.onBeforeCompile=e=>{Object.assign(e.uniforms,a),t.single&&(e.defines={...e.defines,GROUND_SINGLE:``}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${j}`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>\n${M}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${N}`).replace(`#include <map_fragment>`,P).replace(`#include <roughnessmap_fragment>`,`float roughnessFactor = groundRoughness;`).replace(`#include <normal_fragment_maps>`,`
        vec3 groundN = normalize( vGroundNormal );
        vec3 groundT = normalize( vec3( 1.0, 0.0, 0.0 ) - groundN * groundN.x );
        vec3 groundB = cross( groundN, groundT );
        vec3 groundWorldNormal = normalize( groundT * groundTangentNormal.x + groundB * groundTangentNormal.y + groundN * groundTangentNormal.z );
        normal = normalize( ( viewMatrix * vec4( groundWorldNormal, 0.0 ) ).xyz );`).replace(`#include <aomap_fragment>`,`reflectedLight.indirectDiffuse *= groundCavity;
reflectedLight.indirectSpecular *= mix( 1.0, groundCavity, 0.6 );`)},r.customProgramCacheKey=()=>`ground-${t.single?`single`:`double`}`,r}function I(e,t,n=new l){let r=e.attributes.position,i=new Float32Array(r.count*4),a=new Float32Array(r.count);for(let e=0;e<r.count;e+=1){let[o,s,c,l,u]=t(r.getX(e)+n.x,r.getZ(e)+n.z,r.getY(e)+n.y);i.set([o,s,c,l],e*4),a[e]=u}e.setAttribute(`splat`,new c(i,4)),e.setAttribute(`wet`,new c(a,1))}function L(e,t){let n=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=n(r,i),u=n(r+1,i),d=n(r,i+1),f=n(r+1,i+1);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c}function R(e,t,n,r){let a=E(D.layers);if(!a)return null;let o=new i(e,t,Math.round(e*3),Math.round(t*3));o.rotateX(-Math.PI/2),o.translate(n.x,n.y,n.z),I(o,r??((e,t)=>{let n=u.smoothstep(L(e*.28+5,t*.28),.55,.75);return[1-n,n,0,0,0]}));let s=new d(o,F(a,D));return s.receiveShadow=!0,s}function z(e,t,n,r,i){let a=1/0;for(let r=0;r+1<n.length;r+=1){let[i,o]=n[r],[s,c]=n[r+1],l=s-i,u=c-o,d=Math.max(0,Math.min(1,((e-i)*l+(t-o)*u)/Math.max(1e-6,l*l+u*u)));a=Math.min(a,Math.hypot(e-(i+l*d),t-(o+u*d)))}return 1-u.smoothstep(a,r,r+i)}export{F as a,z as c,L as d,h as f,O as i,R as l,D as n,E as o,y as p,k as r,T as s,A as t,I as u};