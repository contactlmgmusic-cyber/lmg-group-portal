import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const dynamic = "force-static";
export async function GET() {
 const logo = await readFile(join(process.cwd(), "app/icon.png"));
 return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",background:"#ffffff",color:"#071331",padding:"60px 76px",fontFamily:"sans-serif",position:"relative"}}><div style={{display:"flex",alignItems:"center",gap:24}}><img src={`data:image/png;base64,${logo.toString("base64")}`} alt="" width={96} height={96}/><span style={{fontSize:23,letterSpacing:4}}>LEGACY MUSIC GROUP</span></div><div style={{display:"flex",flexDirection:"column",marginTop:36,fontSize:76,letterSpacing:-3,lineHeight:1.12,fontWeight:700}}><span>Create. Develop.</span><span style={{color:"#234dff"}}>Build what comes next.</span></div><div style={{display:"flex",marginTop:38,fontSize:25,color:"#56647a"}}>Culture · Creativity · Innovation</div><div style={{position:"absolute",bottom:0,left:0,right:0,height:18,background:"#234dff"}}/></div>,{width:1200,height:630});
}
