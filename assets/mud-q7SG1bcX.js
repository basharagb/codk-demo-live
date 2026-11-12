import{S as e,x as t}from"./index-c7T5lfi7.js";import{Dt as n,Ft as r,Gn as i,I as a,P as o,Pn as s,Vn as c,_r as l,c as u,h as d,nr as f,o as p,vr as m}from"./three.core-CKoySubT.js";import{n as h,t as g}from"./assetStatus-BtsR6pYG.js";import{o as _,p as v}from"./terrain-BlY4Z8GV.js";import{n as y}from"./BufferGeometryUtils-Cpv1OA_M.js";var b=class{constructor(e=.1,t=6){this.maxEdgeLength=e,this.maxIterations=t}modify(e){e.index!==null&&(e=e.toNonIndexed());let t=this.maxIterations,n=this.maxEdgeLength*this.maxEdgeLength,r=new m,i=new m,o=new m,s=new m,c=[r,i,o,s],f=new m,p=new m,h=new m,g=new m,_=[f,p,h,g],v=new d,y=new d,b=new d,x=new d,S=[v,y,b,x],C=new l,w=new l,T=new l,E=new l,D=[C,w,T,E],O=new l,k=new l,A=new l,j=new l,M=[O,k,A,j],N=e.attributes,P=N.normal!==void 0,F=N.color!==void 0,I=N.uv!==void 0,L=N.uv1!==void 0,R=N.position.array,z=P?N.normal.array:null,B=F?N.color.array:null,V=I?N.uv.array:null,H=L?N.uv1.array:null,U=R,W=z,G=B,K=V,q=H,J=0,Y=!0;function X(e,t,n){let r=c[e],i=c[t],a=c[n];if(U.push(r.x,r.y,r.z),U.push(i.x,i.y,i.z),U.push(a.x,a.y,a.z),P){let r=_[e],i=_[t],a=_[n];W.push(r.x,r.y,r.z),W.push(i.x,i.y,i.z),W.push(a.x,a.y,a.z)}if(F){let r=S[e],i=S[t],a=S[n];G.push(r.r,r.g,r.b),G.push(i.r,i.g,i.b),G.push(a.r,a.g,a.b)}if(I){let r=D[e],i=D[t],a=D[n];K.push(r.x,r.y),K.push(i.x,i.y),K.push(a.x,a.y)}if(L){let r=M[e],i=M[t],a=M[n];q.push(r.x,r.y),q.push(i.x,i.y),q.push(a.x,a.y)}}for(;Y&&J<t;){J++,Y=!1,R=U,U=[],P&&(z=W,W=[]),F&&(B=G,G=[]),I&&(V=K,K=[]),L&&(H=q,q=[]);for(let e=0,t=0,a=R.length;e<a;e+=9,t+=6){r.fromArray(R,e+0),i.fromArray(R,e+3),o.fromArray(R,e+6),P&&(f.fromArray(z,e+0),p.fromArray(z,e+3),h.fromArray(z,e+6)),F&&(v.fromArray(B,e+0),y.fromArray(B,e+3),b.fromArray(B,e+6)),I&&(C.fromArray(V,t+0),w.fromArray(V,t+2),T.fromArray(V,t+4)),L&&(O.fromArray(H,t+0),k.fromArray(H,t+2),A.fromArray(H,t+4));let a=r.distanceToSquared(i),c=i.distanceToSquared(o),l=r.distanceToSquared(o);a>n||c>n||l>n?(Y=!0,a>=c&&a>=l?(s.lerpVectors(r,i,.5),P&&g.lerpVectors(f,p,.5),F&&x.lerpColors(v,y,.5),I&&E.lerpVectors(C,w,.5),L&&j.lerpVectors(O,k,.5),X(0,3,2),X(3,1,2)):c>=a&&c>=l?(s.lerpVectors(i,o,.5),P&&g.lerpVectors(p,h,.5),F&&x.lerpColors(y,b,.5),I&&E.lerpVectors(w,T,.5),L&&j.lerpVectors(k,A,.5),X(0,1,3),X(3,2,0)):(s.lerpVectors(r,o,.5),P&&g.lerpVectors(f,h,.5),F&&x.lerpColors(v,b,.5),I&&E.lerpVectors(C,T,.5),L&&j.lerpVectors(O,A,.5),X(0,1,3),X(3,1,2))):X(0,1,2)}}let Z=new u;return Z.setAttribute(`position`,new a(U,3)),P&&Z.setAttribute(`normal`,new a(W,3)),F&&Z.setAttribute(`color`,new a(G,3)),I&&Z.setAttribute(`uv`,new a(K,2)),L&&Z.setAttribute(`uv1`,new a(q,2)),Z}},x=e({loadMud:()=>T,mudMaterial:()=>D,najdiWall:()=>A,stoneFooting:()=>j}),S=new f,C=null,w=null;function T(){return C??=Promise.all([`diff`,`nor`].map(e=>S.loadAsync(t(`/pbr/clay_plaster_${e}.webp`)))).then(([e,t])=>{for(let n of[e,t])n.wrapS=n.wrapT=s,n.anisotropy=8,n.userData.shared=!0;return e.colorSpace=c,t.colorSpace=``,w={albedo:e,normal:t},h(`mud plaster`),w}),C.then(()=>void 0).catch(e=>{C=null,g(`mud plaster photograph`,e,`the plain plaster`)})}var E=`#715a3b`;function D(e={}){let t=_([`clay_block_wall`])?.get(`clay_block_wall`);if(!w||!t)return null;let r=new d(e.colour??`#c2a07a`),i=new d(E),a={mudPlaster:{value:w.albedo},mudPlasterNormal:{value:w.normal},mudBlocks:{value:t.albedo},mudBlocksRelief:{value:t.relief},mudPlasterTint:{value:new d(r.r/i.r,r.g/i.g,r.b/i.b)},mudBlocksTint:{value:v(`clay_block_wall`,new d(e.colour??`#c2a07a`).multiplyScalar(.88))},mudBase:{value:e.base??0},mudErosion:{value:e.erosion??1}},o=new n({color:`#ffffff`,roughness:.95,metalness:0});return o.onBeforeCompile=e=>{Object.assign(e.uniforms,a),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vMudWorld;
varying vec3 vMudNormal;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
        vec4 mudWorld = modelMatrix * vec4( transformed, 1.0 );
        #ifdef USE_INSTANCING
          mudWorld = modelMatrix * instanceMatrix * vec4( transformed, 1.0 );
        #endif
        vMudWorld = mudWorld.xyz;
        vMudNormal = normalize( mat3( modelMatrix ) * objectNormal );`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform sampler2D mudPlaster; uniform sampler2D mudPlasterNormal; uniform sampler2D mudBlocks; uniform sampler2D mudBlocksRelief;
        uniform vec3 mudPlasterTint; uniform vec3 mudBlocksTint; uniform float mudBase; uniform float mudErosion;
        varying vec3 vMudWorld; varying vec3 vMudNormal;
        float mudHash( vec3 p ) { return fract( sin( dot( p, vec3( 127.1, 311.7, 74.7 ) ) ) * 43758.5453 ); }
        float mudNoise( vec3 p ) {
          vec3 i = floor( p ), f = fract( p ); vec3 u = f * f * ( 3.0 - 2.0 * f );
          return mix( mix( mix( mudHash( i ), mudHash( i + vec3( 1, 0, 0 ) ), u.x ), mix( mudHash( i + vec3( 0, 1, 0 ) ), mudHash( i + vec3( 1, 1, 0 ) ), u.x ), u.y ),
                      mix( mix( mudHash( i + vec3( 0, 0, 1 ) ), mudHash( i + vec3( 1, 0, 1 ) ), u.x ), mix( mudHash( i + vec3( 0, 1, 1 ) ), mudHash( i + vec3( 1, 1, 1 ) ), u.x ), u.y ), u.z );
        }
        vec3 mudTri( sampler2D map, vec3 p, vec3 w, float size ) {
          return texture2D( map, p.zy / size ).rgb * w.x + texture2D( map, p.xz / size ).rgb * w.y + texture2D( map, p.xy / size ).rgb * w.z;
        }
        // A tangent-space normal map from three sides, blended in world space ("whiteout").
        vec3 mudTriNormal( vec3 nx, vec3 ny, vec3 nz, vec3 n, vec3 w ) {
          nx = vec3( nx.xy + n.zy, abs( nx.z ) * n.x );
          ny = vec3( ny.xy + n.xz, abs( ny.z ) * n.y );
          nz = vec3( nz.xy + n.xy, abs( nz.z ) * n.z );
          return normalize( nx.zyx * w.x + ny.xzy * w.y + nz.xyz * w.z );
        }`).replace(`#include <map_fragment>`,`
        vec3 mudN = normalize( vMudNormal );
        vec3 mudW = pow( abs( mudN ), vec3( 4.0 ) ); mudW /= mudW.x + mudW.y + mudW.z;
        vec3 p = vMudWorld;
        vec3 plasterColour = mudTri( mudPlaster, p, mudW, 1.9 ) * mudPlasterTint;
        vec3 blocksColour = mudTri( mudBlocks, p, mudW, 2.0 ) * mudBlocksTint;
        float blocksHeight = mudTri( mudBlocksRelief, p, mudW, 2.0 ).b;
        // Where the plaster has gone: patches over the wall, more near the foot and the corners, broken along the
        // bricks' own relief.
        float rise = p.y - mudBase;
        float worn = mudNoise( p * 0.9 ) * 0.6 + mudNoise( p * 2.7 + 5.0 ) * 0.4;
        worn += ( 1.0 - smoothstep( 0.0, 1.1, rise ) ) * 0.22 + blocksHeight * 0.18;
        float bare = smoothstep( 0.74, 0.8, worn * mudErosion );
        vec3 mudColour = mix( plasterColour, blocksColour, bare );
        // Damp at the foot, bleached by the sun towards the top, streaked down from it.
        mudColour *= mix( 0.78, 1.0, smoothstep( 0.04, 0.5, rise ) );
        float streak = smoothstep( 0.55, 0.9, mudNoise( vec3( ( p.x + p.z ) * 7.0, p.y * 0.35, 0.0 ) ) );
        mudColour *= 1.0 - streak * 0.07;
        mudColour *= 0.94 + 0.12 * mudNoise( p * 0.35 + 3.0 );
        diffuseColor.rgb *= mudColour;
        float mudBare = bare;`).replace(`#include <normal_fragment_maps>`,`
        vec3 plasterNormal = mudTriNormal( texture2D( mudPlasterNormal, p.zy / 1.9 ).xyz * 2.0 - 1.0, texture2D( mudPlasterNormal, p.xz / 1.9 ).xyz * 2.0 - 1.0, texture2D( mudPlasterNormal, p.xy / 1.9 ).xyz * 2.0 - 1.0, mudN, mudW );
        vec3 rx = texture2D( mudBlocksRelief, p.zy / 2.0 ).xyz, ry = texture2D( mudBlocksRelief, p.xz / 2.0 ).xyz, rz = texture2D( mudBlocksRelief, p.xy / 2.0 ).xyz;
        vec3 blocksNormal = mudTriNormal( vec3( rx.xy * 2.0 - 1.0, 1.0 ), vec3( ry.xy * 2.0 - 1.0, 1.0 ), vec3( rz.xy * 2.0 - 1.0, 1.0 ), mudN, mudW );
        normal = normalize( ( viewMatrix * vec4( normalize( mix( plasterNormal, blocksNormal, mudBare ) ), 0.0 ) ).xyz );`).replace(`#include <aomap_fragment>`,`reflectedLight.indirectDiffuse *= mix( 1.0, mix( 0.6, 1.0, blocksHeight ), mudBare );`)},o.customProgramCacheKey=()=>`najdi-mud`,o}var O=1;function k(e,t,n){e.deleteAttribute(`uv`),e.deleteAttribute(`normal`);let r=y(e,1e-4);r.computeVertexNormals();let i=r.attributes.position,a=r.attributes.normal,o=(e,t,r)=>{let i=Math.sin(e*127.1+t*311.7+r*74.7+n*13.1)*43758.5453;return i-Math.floor(i)},s=(e,t,n)=>{let r=Math.floor(e),i=Math.floor(t),a=Math.floor(n),s=e-r,c=t-i,l=n-a,u=s*s*(3-2*s),d=c*c*(3-2*c),f=l*l*(3-2*l),p=(e,t,n)=>e+(t-e)*n,m=e=>p(p(o(r,i,e),o(r+1,i,e),u),p(o(r,i+1,e),o(r+1,i+1,e),u),d);return p(m(a),m(a+1),f)};for(let e=0;e<i.count;e+=1){let n=i.getX(e),r=i.getY(e),o=i.getZ(e),c=(s(n*1.3,r*1.3,o*1.3)-.5)*.7+(s(n*4.1,r*4.1,o*4.1)-.5)*.3;i.setXYZ(e,n+a.getX(e)*c*t,r+a.getY(e)*c*t,o+a.getZ(e)*c*t)}return r.computeVertexNormals(),r}function A(e,t,n=.36){let a=new i,s=.62,c=Math.max(1,Math.floor(e/s)),l=-c*s/2;a.moveTo(l,0),a.lineTo(l,t);for(let e=0;e<c;e+=1){let n=l+e*s;a.lineTo(n+s*.12,t),a.lineTo(n+s*.12,t+.12),a.lineTo(n+s*.26,t+.12),a.lineTo(n+s*.26,t+.24),a.lineTo(n+s*.5,t+.42),a.lineTo(n+s*.74,t+.24),a.lineTo(n+s*.74,t+.12),a.lineTo(n+s*.88,t+.12),a.lineTo(n+s*.88,t),a.lineTo(n+s,t)}a.lineTo(l+c*s,0),a.lineTo(l,0);for(let e=1;e<c;e+=2){let n=l+e*s+s/2,i=new r;i.moveTo(n-.09,t*.45),i.lineTo(n+.09,t*.45),i.lineTo(n,t*.45+.17),i.lineTo(n-.09,t*.45),a.holes.push(i)}let u=new o(a,{depth:n,bevelEnabled:!0,bevelThickness:.035,bevelSize:.035,bevelSegments:2,curveSegments:1}),d=u.attributes.position;for(let e=0;e<d.count;e+=1){let r=d.getY(e),i=d.getZ(e),a=Math.min(1,Math.max(0,r/(t+.4)))*n*.1;d.setZ(e,i+(i>n/2?-a:a))}let f=new b(.22,7).modify(u.index?u.toNonIndexed():u);u.dispose();let p=k(f,.022,O++);return f.dispose(),p}function j(e,t,n){let r=new p(e,t,n,Math.max(2,Math.round(e/.2)),3,3),i=k(r.toNonIndexed(),.03,O++);return r.dispose(),i}export{j as a,A as i,D as n,x as r,T as t};