import { Inbox, Download, Search, Filter } from "lucide-react";
const subs = [
    { id: "1", name: "Acme Corp", product: "Core Engine", date: "10 mins ago", status: "New" },
    { id: "2", name: "Stark Industries", product: "Analytics Module", date: "2 hours ago", status: "Read" },
    { id: "3", name: "Globex", product: "Custom API Hub", date: "1 day ago", status: "Read" },
    { id: "4", name: "Initech", product: "Core Engine", date: "2 days ago", status: "Read" }
];
export default function SubmissionsPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1200 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Inbox style={{ color: "var(--color-accent-primary)" }} /> Submissions Inbox</h1>
                <p style={{ color: "var(--color-text-secondary)", marginTop: 4 }}>Customer Onboarding Tracker</p>
            </div>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <button className="btn"><Filter size={16} /> Filter</button>
                <button className="btn"><Download size={16} /> Export CSV</button>
            </div>
        </div>

        <div className="card" style={{ padding: "var(--space-2)", marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <Search size={18} style={{ color: "var(--color-text-tertiary)", marginLeft: "var(--space-3)" }} />
            <input type="text" placeholder="Search answers..." style={{ border: "none", background: "transparent", width: "100%", padding: "8px 16px", outline: "none", fontSize: "14px" }} />
        </div>

        <div className="card" style={{ overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)" }}>
                        <th style={{ textAlign: "left", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 600 }}>Company Name</th>
                        <th style={{ textAlign: "left", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 600 }}>Product</th>
                        <th style={{ textAlign: "left", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 600 }}>Submitted</th>
                        <th style={{ textAlign: "right", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 600 }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {subs.map(s => (<tr key={s.id} style={{ borderBottom: "1px solid var(--color-border)", background: s.status === "New" ? "var(--color-accent-soft)" : "transparent" }}>
                        <td style={{ padding: "16px", fontWeight: 600 }}>{s.name}</td>
                        <td style={{ padding: "16px", color: "var(--color-text-secondary)", fontSize: "14px" }}>{s.product}</td>
                        <td style={{ padding: "16px", color: "var(--color-text-secondary)", fontSize: "14px" }}>{s.date}</td>
                        <td style={{ padding: "16px", textAlign: "right" }}>
                            {s.status === "New" && <span style={{ display: "inline-block", width: 8, height: 8, background: "var(--color-accent-primary)", borderRadius: "50%" }}></span>}
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    </div>);
}
