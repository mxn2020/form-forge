import { Save, Settings, Share2, Type, AlignLeft, CheckSquare, Settings2, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, Card, Input } from "@geenius-ui/react-css";

export default function BuilderPage() {
    return (<div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <header style={{ padding: "var(--space-3) var(--space-4)", borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-card)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                <Link to="/"><Button variant="ghost" size="sm" icon={<ArrowLeft size={18} />} /></Link>
                <div style={{ fontWeight: 600 }}>Customer Onboarding Tracker</div>
            </div>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <Button variant="ghost" icon={<Settings size={16} />}>Settings</Button>
                <Button variant="outline" icon={<Share2 size={16} />}>Share</Button>
                <Button variant="primary" icon={<Save size={16} />}>Save Form</Button>
            </div>
        </header>

        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
            <div style={{ width: 280, borderRight: "1px solid var(--color-border)", background: "var(--color-bg-card)", padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)", overflowY: "auto" }}>
                <h3 style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", color: "var(--color-text-tertiary)", marginBottom: "var(--space-2)" }}>Form Elements</h3>
                <Button variant="outline" style={{ justifyContent: "flex-start" }}><Type size={16} style={{ color: "var(--color-accent-primary)" }} /> Short Text</Button>
                <Button variant="outline" style={{ justifyContent: "flex-start" }}><AlignLeft size={16} style={{ color: "var(--color-accent-primary)" }} /> Long Text</Button>
                <Button variant="outline" style={{ justifyContent: "flex-start" }}><CheckSquare size={16} style={{ color: "var(--color-accent-primary)" }} /> Multiple Choice</Button>
                <Button variant="outline" style={{ justifyContent: "flex-start" }}><Settings2 size={16} style={{ color: "var(--color-accent-primary)" }} /> Dropdown</Button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", padding: "var(--space-8)", display: "flex", justifyContent: "center", background: "var(--color-bg-primary)" }}>
                <div style={{ maxWidth: 700, width: "100%" }}>
                    <Card padding="lg" className="form-header-card">
                        <input type="text" defaultValue="Customer Onboarding Tracker" style={{ width: "100%", border: "none", fontSize: "28px", fontWeight: 700, color: "var(--color-text-primary)", outline: "none", marginBottom: "var(--space-2)" }} />
                        <input type="text" defaultValue="Please fill out this form to begin the structured onboarding process." style={{ width: "100%", border: "none", fontSize: "15px", color: "var(--color-text-secondary)", outline: "none" }} />
                    </Card>

                    <div className="canvas-element" style={{ paddingLeft: 32, marginTop: "var(--space-4)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                            <input type="text" defaultValue="What is your company name?" style={{ width: "100%", border: "none", fontSize: "16px", fontWeight: 600, background: "transparent", outline: "none" }} />
                            <Button variant="ghost" size="sm" icon={<Trash2 size={16} style={{ color: "#EF4444" }} />} />
                        </div>
                        <Input type="text" disabled placeholder="Short answer text" style={{ background: "var(--color-bg-primary)", cursor: "not-allowed" }} />
                    </div>

                    <div className="canvas-element" style={{ paddingLeft: 32, borderColor: "var(--color-accent-primary)", boxShadow: "0 0 0 1px var(--color-accent-primary)", marginTop: "var(--space-4)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                            <input type="text" defaultValue="Which product are you implementing?" style={{ width: "100%", border: "none", fontSize: "16px", fontWeight: 600, background: "transparent", outline: "none" }} />
                            <Button variant="ghost" size="sm" icon={<Trash2 size={16} style={{ color: "#EF4444" }} />} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                            <label style={{ display: "flex", alignItems: "center", gap: 8 }}><input type="radio" disabled /> Core Engine</label>
                            <label style={{ display: "flex", alignItems: "center", gap: 8 }}><input type="radio" disabled /> Analytics Module</label>
                            <label style={{ display: "flex", alignItems: "center", gap: 8 }}><input type="radio" checked disabled /> Custom API Hub</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
