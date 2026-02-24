import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import FormsListPage from "../pages/FormsListPage"; import BuilderPage from "../pages/BuilderPage"; import SubmissionsPage from "../pages/SubmissionsPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("FormForge")).toBeInTheDocument(); });
    it("FormsListPage renders", () => { wrap(<FormsListPage />); expect(screen.getByText("Customer Onboarding Tracker")).toBeInTheDocument(); });
    it("BuilderPage renders", () => { wrap(<BuilderPage />); expect(screen.getByText("Form Elements")).toBeInTheDocument(); });
    it("SubmissionsPage renders", () => { wrap(<SubmissionsPage />); expect(screen.getAllByText("Customer Onboarding Tracker")[0]).toBeInTheDocument(); });
});
