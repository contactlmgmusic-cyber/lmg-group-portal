import type { Metadata } from "next";
import DivisionPage from "@/components/DivisionPage";
export const metadata: Metadata = { title: "LMG Music" };
export default function Page() { return <DivisionPage slug="music"/>; }
