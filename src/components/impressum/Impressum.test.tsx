import { render, screen } from "@testing-library/react";
import Impressum from "./Impressum";



describe("Impressum component", () => {
  const setShowImpressum = jest.fn()
  const showImpressumTrue = true

  it("should render Footer component correctly", async () => {

    const impressumText1 = "unser angebot enthält links zu externen webseiten dritter, auf deren inhaltewir keinen einfluss haben. deshalb können wir für diese fremden inhalte auch keinegewähr übernehmen. für die inhalte der verlinkten seiten ist stets der jeweiligeanbieter oder betreiber der seiten verantwortlich. die verlinkten seiten wurdenzum zeitpunkt der verlinkung auf mögliche  rechtsverstöße überprüft. rechtswidrigeinhalte waren zum zeitpunkt der verlinkung nicht erkennbar. eine permanenteinhaltliche kontrolle der verlinkten seiten ist jedoch ohne konkrete anhaltspunkteeiner rechtsverletzung nicht zumutbar. bei bekanntwerden von rechtsverletzungenwerden wir derartige links umgehend entfernen."
    
    const impressumText2 = "unser angebot enthält links zu externen webseiten dritter, auf deren inhalte wir keinen einfluss haben. deshalb können wir für diese fremden inhalte auch keine gewähr übernehmen. für die inhalte der verlinkten seiten ist stets der jeweilige anbieter oder betreiber der seiten verantwortlich. die verlinkten seiten wurden zum zeitpunkt der verlinkung auf mögliche  rechtsverstöße überprüft. rechtswidrige inhalte waren zum zeitpunkt der verlinkung nicht erkennbar. eine permanente inhaltliche kontrolle der verlinkten seiten ist jedoch ohne konkrete anhaltspunkte einer rechtsverletzung nicht zumutbar. bei bekanntwerden von rechtsverletzungen werden wir derartige links umgehend entfernen."
      
    const verantwortlich = "verantwortlich für alle inhalte dieser internetseite:"

    render(<Impressum setShowImpressum={setShowImpressum} showImpressum={showImpressumTrue} />);
    const impressumHeadline = await screen.findAllByText("IMPRESSUM");
    const itemsResponsibility = await screen.findAllByText(verantwortlich)
    expect(impressumHeadline).toHaveLength(1)
    expect(itemsResponsibility).toHaveLength(1)
    expect(screen.getByTestId('component').textContent).toBe(impressumText1+impressumText2)
})})