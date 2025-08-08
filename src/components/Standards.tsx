import { Container, Grid, Stack, Typography } from "@mui/material";
import { Colors } from "../theme/colors.ts";

interface StandardItem {
  category: string;
  description: string;
}

const standardsData: StandardItem[] = [
  { category: "Základové konstrukce", description: "Standardní základové konstrukce pro zajištění stability domu." },
  { category: "Obvodové nosné konstrukce", description: "Robustní nosné konstrukce pro dlouhou životnost budovy." },
  { category: "Konstrukce stropu", description: "Zakládorovené monostřičky pro pevné a bezpečné stropy." },
  // { category: "Schodiště", description: "Zakládorovené profildružování pro pohodlný přístup." },
  { category: "Střecha", description: "Kvalitní střešní konstrukce pro ochranu před povětrnostními vlivy." },
  { category: "Vodoměry a měření spotřeby vody", description: "Moderní systémy pro přesné měření spotřeby vody." },
  { category: "Vytápění", description: "Efektivní vytápění pro komfortní bydlení." },
  { category: "Elektroinstalace", description: "Bezpečné a moderní elektrické rozvody." },
  { category: "Vzduchotechnika", description: "Systémy pro kvalitní větrání a zdravé vnitřní prostředí." },
  // { category: "Zařizovací předměty", description: "Kvalitní vybavení koupelen a kuchyní pro váš komfort." },
];

export const Standards = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 2, pb: 4 }}>
      <Typography variant={"h2"}>Standardy bytů</Typography>
      {/*<Stats stats={data[0].apartments[0]} />*/}
      <Typography sx={{ color: Colors.secondary }}>
        Ve Vysokém nad Jizerou právě vzniká exkluzivní projekt výstavby pěti nových luxusních rodinných domů, které
        spojují výhody moderního bydlení s klidem a krásou horské krajiny. Každý z domů je navržen s důrazem na pohodlí
        a funkčnost – nabízí moderní architekturu v harmonii s okolní přírodou, prostorné dispozice ideální pro rodiny s
        dětmi a vysoký standard provedení, který splní i ty nejnáročnější požadavky. Samozřejmostí jsou kvalitní
        materiály, dostatek úložného prostoru a promyšlené detaily, které oceníte v každodenním životě. Domy se
        nacházejí v klidné části města, takže poskytují dostatek soukromí a prostoru pro odpočinek, zároveň jsou však v
        docházkové vzdálenosti od školy, obchodů i služeb. Milovníci aktivního životního stylu ocení blízkost
        turistických a cyklistických tras i lyžařských areálů, které dělají z této lokality atraktivní místo po celý
        rok.
      </Typography>
      <Typography sx={{ color: Colors.secondary }}>
        Tento projekt je skvělou volbou jak pro rodiny hledající trvalé bydlení v bezpečném a inspirativním prostředí,
        tak pro ty, kdo chtějí investovat do rekreační nebo víkendové nemovitosti. Děti zde mohou vyrůstat v
        bezprostřední blízkosti přírody, učit se vztahu k okolí a trávit volný čas aktivně, zatímco rodiče ocení klid,
        čistý vzduch a možnost uniknout ruchu města. Výstavba je omezena na pouhých pět domů, což zajišťuje exkluzivitu
        a komorní atmosféru celého projektu. Pokud hledáte místo, kde se spojuje kvalita, design a příroda – Vysoké nad
        Jizerou může být tím pravým domovem pro vaši rodinu. Nezávazně nás kontaktujte pro více informací nebo si
        domluvte osobní prohlídku – o tyto domy je vysoký zájem.
      </Typography>

      {/*<Typography variant={"h2"}>Standardní provedení</Typography>*/}
      <Grid container spacing={3} my={5}>
        {standardsData.map((item, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Stack
              sx={{
                py: 1,
                height: "100%",
                // border: "1px solid white", backgroundColor: "transparent", borderRadius: 2
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {item.category}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: Colors.secondary }}>
                {item.description}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
