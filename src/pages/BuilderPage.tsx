import { Save, Settings, Share2, Type, AlignLeft, CheckSquare, Settings2, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
export default function BuilderPage() {
    return (<div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <header style={{ padding: "var(--space-3) var(--space-4)", borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-card)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                <Link to="/" className="btn btn-ghost btn-sm" style={{ padding: 6 }}><ArrowLeft size={18} /></Link>
                <div style={{ fontWeight: 600 }}>Customer Onboarding Tracker</div>
            </div>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <button className="btn btn-ghost"><Settings size={16} /> Settings</button>
                <button className="btn"><Share2 size={16} /> Share</button>
                <button className="btn btn-primary"><Save size={16} /> Save Form</button>
            </div>
        </header>

        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
            <div style={{ width: 280, borderRight: "1px solid var(--color-border)", background: "var(--color-bg-card)", padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)", overflowY: "auto" }}>
                <h3 style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", color: "var(--color-text-tertiary)", marginBottom: "var(--space-2)" }}>Form Elements</h3>
                <button className="btn" style={{ justifyContent: "flex-start", background: "var(--color-bg-primary)" }}><Type size={16} style={{ color: "var(--color-accent-primary)" }} /> Short Text</button>
                <button className="btn" style={{ justifyContent: "flex-start", background: "var(--color-bg-primary)" }}><AlignLeft size={16} style={{ color: "var(--color-accent-primary)" }} /> Long Text</button>
                <button className="btn" style={{ justifyContent: "flex-start", background: "var(--color-bg-primary)" }}><CheckSquare size={16} style={{ color: "var(--color-accent-primary)" }} /> Multiple Choice</button>
                <button className="btn" style={{ justifyContent: "flex-start", background: "var(--color-bg-primary)" }}><Settings2 size={16} style={{ color: "var(--color-accent-primary)" }} /> Dropdown</button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", padding: "var(--space-8)", display: "flex", justifyContent: "center", background: "var(--color-bg-primary)" }}>
                <div style={{ maxWidth: 700, width: "100%" }}>
                    <div className="card" style={{ padding: "var(--space-8)", marginBottom: "var(--space-6)", borderTop: "6px solid var(--color-accent-primary)" }}>
                        <input type="text" defaultValue="Customer Onboarding Tracker" style={{ width: "100%", border: "none", fontSize: "28px", fontWeight: 700, color: "var(--color-text-primary)", outline: "none", marginBottom: "var(--space-2)" }} />
                        <input type="text" defaultValue="Please fill out this form to begin the structured onboarding process." style={{ width: "100%", border: "none", fontSize: "15px", color: "var(--color-text-secondary)", outline: "none" }} />
                    </div>

                    <div className="canvas-element" style={{ paddingLeft: 32 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                            <input type="text" defaultValue="What is your company name?" style={{ width: "100%", border: "none", fontSize: "16px", fontWeight: 600, background: "transparent", outline: "none" }} />
                            <button className="btn btn-ghost btn-sm"><Trash2 size={16} style={{ color: "#EF4444" }} /></button>
                        </div>
                        <input type="text" disabled placeholder="Short answer text" className="input" style={{ background: "var(--color-bg-primary)", cursor: "not-allowed" }} />
                    </div>

                    <div className="canvas-element" style={{ paddingLeft: 32, borderColor: "var(--color-accent-primary)", boxShadow: "0 0 0 1px var(--color-accent-primary)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                            <input type="text" defaultValue="Which product are you implementing?" style={{ width: "100%", border: "none", fontSize: "16px", fontWeight: 600, background: "transparent", outline: "none" }} />
                            <button className="btn btn-ghost btn-sm"><Trash2 size={16} style={{ color: "#EF4444" }} /></button>
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
