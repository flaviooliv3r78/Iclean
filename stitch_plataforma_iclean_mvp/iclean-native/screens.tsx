import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import type { LucideIcon } from "lucide-react-native";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bell,
  Brush,
  CalendarCheck,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Heart,
  House,
  MapPin,
  MessageCircle,
  Minus,
  Navigation,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react-native";
import { useState, type ReactNode } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput,
  type ImageSourcePropType,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, styles } from "./theme";
import type { RootStackParamList } from "./types";

type RootNavigation = NativeStackNavigationProp<RootStackParamList>;
type SplashProps = NativeStackScreenProps<RootStackParamList, "Splash">;
type SignInProps = NativeStackScreenProps<RootStackParamList, "SignIn">;
type ProfileProps = NativeStackScreenProps<RootStackParamList, "ProProfile">;

type Pro = {
  id: "sonia" | "ana" | "maria";
  name: string;
  initials: string;
  rating: string;
  reviews: number;
  distance: string;
  price: number;
  note: string;
  image?: ImageSourcePropType;
};

const pros: Pro[] = [
  {
    id: "sonia",
    name: "Dona Sônia Ribeiro",
    initials: "SR",
    rating: "4.9",
    reviews: 86,
    distance: "0,8 km de você",
    price: 140,
    note: "Especialista em limpeza completa",
    image: require("./assets/dona-sonia.png"),
  },
  {
    id: "ana",
    name: "Ana Paula Costa",
    initials: "AP",
    rating: "5.0",
    reviews: 54,
    distance: "1,4 km de você",
    price: 135,
    note: "Organização e cuidado com detalhes",
    image: require("./assets/ana-paula.png"),
  },
  {
    id: "maria",
    name: "Maria Silva",
    initials: "MS",
    rating: "4.8",
    reviews: 39,
    distance: "2,1 km de você",
    price: 125,
    note: "Atende casas e apartamentos",
  },
];

function Page({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView edges={["top"]} style={styles.page}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <View style={styles.brand}>
      <View style={styles.brandIcon}>
        <House size={21} color={colors.surface} strokeWidth={2.5} />
      </View>
      <View>
        <Text style={styles.brandText}>IClean</Text>
        {!compact && <Text style={styles.location}>Parque Paulista, Francisco Morato</Text>}
      </View>
    </View>
  );
}

function TopBar({ back }: { back?: () => void }) {
  return (
    <View style={styles.topBar}>
      {back ? (
        <Pressable accessibilityLabel="Voltar" onPress={back} style={styles.row}>
          <ArrowLeft size={21} color={colors.ink} />
          <Text style={styles.label}>Voltar</Text>
        </Pressable>
      ) : (
        <Brand />
      )}
      <Pressable accessibilityLabel="Falar com suporte" onPress={() => Alert.alert("Suporte IClean", "Entre em contato pelo WhatsApp para receber ajuda.")}>
        <MessageCircle size={21} color={colors.green} />
      </Pressable>
    </View>
  );
}

function Button({
  title,
  onPress,
  icon: Icon,
  tone = "primary",
}: {
  title: string;
  onPress: () => void;
  icon?: LucideIcon;
  tone?: "primary" | "green" | "light";
}) {
  const buttonStyle = [
    styles.button,
    tone === "green" && styles.buttonGreen,
    tone === "light" && styles.buttonLight,
  ];
  const textStyle = tone === "light" ? styles.buttonTextLight : styles.buttonText;
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{title}</Text>
      {Icon && <Icon size={18} color={tone === "light" ? colors.blueDark : colors.surface} />}
    </Pressable>
  );
}

function SectionTitle({ title, detail }: { title: string; detail?: string }) {
  return (
    <View style={styles.between}>
      <Text style={styles.sectionHeading}>{title}</Text>
      {detail && <Text style={styles.small}>{detail}</Text>}
    </View>
  );
}

function Choice({
  title,
  selected,
  onPress,
}: {
  title: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      onPress={onPress}
      style={[styles.option, selected && styles.optionSelected]}
    >
      <Text style={[styles.optionText, selected && styles.optionTextSelected]}>{title}</Text>
    </Pressable>
  );
}

function Counter({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (next: number) => void;
}) {
  return (
    <View style={styles.between}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        <Pressable
          accessibilityLabel={`Diminuir ${label.toLowerCase()}`}
          onPress={() => onChange(Math.max(1, value - 1))}
          style={styles.counterButton}
        >
          <Minus size={16} color={colors.blueDark} />
        </Pressable>
        <Text style={styles.counterValue}>{value}</Text>
        <Pressable
          accessibilityLabel={`Aumentar ${label.toLowerCase()}`}
          onPress={() => onChange(Math.min(8, value + 1))}
          style={[styles.counterButton, styles.counterButtonActive]}
        >
          <Plus size={16} color={colors.surface} />
        </Pressable>
      </View>
    </View>
  );
}

function Avatar({ initials, image, large = false }: { initials: string; image?: ImageSourcePropType; large?: boolean }) {
  return (
    <View style={[styles.avatar, large && styles.avatarLarge]}>
      {image ? <Image source={image} style={styles.avatarPhoto} /> : <Text style={[styles.avatarText, large && styles.avatarTextLarge]}>{initials}</Text>}
    </View>
  );
}

export function SplashScreen({ navigation }: SplashProps) {
  return (
    <SafeAreaView style={[styles.page, styles.splashPage]}>
      <View style={styles.splashTop}>
        <Brand compact />
        <View style={styles.splashArt}>
          <View style={styles.splashRing}>
            <Image source={require("./assets/dona-sonia.png")} style={styles.splashPhoto} />
          </View>
          <View style={styles.splashBadge}>
            <ShieldCheck size={22} color={colors.green} />
          </View>
          <View style={styles.splashSparkle}>
            <Sparkles size={18} color={colors.amber} />
          </View>
        </View>
      </View>
      <View style={styles.splashContent}>
        <View style={styles.badge}>
          <CheckCircle2 size={15} color={colors.green} />
          <Text style={styles.badgeText}>Profissionais verificadas no seu bairro</Text>
        </View>
        <Text style={styles.splashTitle}>Sua casa limpa,{"\n"}seu tempo de volta.</Text>
        <Text style={styles.subheading}>
          Encontre profissionais de confiança perto de você, com praticidade e valor justo.
        </Text>
        <Button title="Começar agora" icon={ArrowRight} onPress={() => navigation.replace("Tabs")} />
        <Pressable onPress={() => navigation.navigate("SignIn", { role: "pro" })} style={styles.centerLink}>
          <Text style={styles.linkText}>Sou profissional parceira</Text>
          <ChevronRight size={16} color={colors.blue} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export function HomeScreen() {
  const navigation = useNavigation<RootNavigation>();
  const [property, setProperty] = useState("Casa");
  const [rooms, setRooms] = useState(2);
  const [baths, setBaths] = useState(1);
  const [service, setService] = useState<"Padrão" | "Completa">("Padrão");
  const [frequency, setFrequency] = useState("Semanal");
  const discounts: Record<string, number> = { Avulsa: 0, Semanal: 10, Quinzenal: 5 };
  const amount = Math.round(
    (130 + Math.max(rooms - 2, 0) * 15 + Math.max(baths - 1, 0) * 20 + (service === "Completa" ? 50 : 0)) *
      (1 - discounts[frequency] / 100),
  );

  return (
    <Page>
      <TopBar />
      <View style={styles.hero}>
        <Text style={styles.heroKicker}>LIMPEZA COM CONFIANÇA, PERTO DE VOCÊ</Text>
        <Text style={styles.heroTitle}>Sua casa limpa,{"\n"}seu tempo de volta.</Text>
        <Text style={styles.heroText}>Profissionais verificadas no seu bairro. Agende em poucos passos.</Text>
        <View style={styles.heroProof}>
          <ShieldCheck size={17} color="#A8F0D0" />
          <Text style={styles.heroProofText}>Mais de 480 lares atendidos</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.between}>
          <View>
            <Text style={styles.eyebrow}>SIMULAÇÃO RÁPIDA</Text>
            <Text style={styles.sectionHeading}>Quanto custa sua limpeza?</Text>
          </View>
          <Sparkles size={21} color={colors.blue} />
        </View>
        <View style={styles.divider} />
        <View style={styles.choiceGroup}>
          {["Casa", "Apartamento", "Sobrado"].map((item) => (
            <Choice key={item} title={item} selected={property === item} onPress={() => setProperty(item)} />
          ))}
        </View>
        <Counter label="Quartos" value={rooms} onChange={setRooms} />
        <Counter label="Banheiros" value={baths} onChange={setBaths} />
        <View style={styles.choiceGroup}>
          {["Padrão", "Completa"].map((item) => (
            <Choice key={item} title={item} selected={service === item} onPress={() => setService(item as "Padrão" | "Completa")} />
          ))}
        </View>
        <View style={styles.choiceGroup}>
          {["Avulsa", "Semanal", "Quinzenal"].map((item) => (
            <Choice key={item} title={item} selected={frequency === item} onPress={() => setFrequency(item)} />
          ))}
        </View>
        <View style={styles.estimate}>
          <View>
            <Text style={styles.small}>Estimativa por diária</Text>
            <Text style={styles.price}>R$ {amount}</Text>
          </View>
          <View style={styles.estimateTime}>
            <Clock3 size={17} color={colors.blue} />
            <Text style={styles.small}>{service === "Completa" ? "6 a 8 horas" : "4 a 5 horas"}</Text>
          </View>
        </View>
        <Button title="Encontrar profissionais" icon={ArrowRight} onPress={() => navigation.navigate("Booking")} />
        <Button title="Quero trabalhar com a IClean" tone="light" icon={Brush} onPress={() => navigation.navigate("SignIn", { role: "pro" })} />
      </View>

      <View style={styles.featureStrip}>
        <ShieldCheck size={20} color={colors.green} />
        <View style={styles.featureCopy}>
          <Text style={styles.label}>Segurança em primeiro lugar</Text>
          <Text style={styles.small}>Profissionais verificadas e avaliadas pela comunidade.</Text>
        </View>
      </View>
    </Page>
  );
}

export function RequestsScreen() {
  const navigation = useNavigation<RootNavigation>();
  return (
    <Page>
      <TopBar />
      <View style={styles.screenHeadingBlock}>
        <Text style={styles.heading}>Suas limpezas</Text>
        <Text style={styles.subheading}>Acompanhe pedidos e agendamentos por aqui.</Text>
      </View>
      <View style={styles.emptyState}>
        <View style={styles.emptyIcon}><CalendarCheck size={31} color={colors.blue} /></View>
        <Text style={styles.sectionHeading}>Sua próxima limpeza começa aqui</Text>
        <Text style={styles.subheading}>Ainda não há agendamentos nesta demonstração.</Text>
        <Button title="Agendar uma limpeza" icon={ArrowRight} onPress={() => navigation.navigate("Booking")} />
      </View>
      <View style={styles.infoRow}>
        <ShieldCheck size={18} color={colors.green} />
        <Text style={styles.small}>O pagamento é combinado com segurança depois que o serviço for confirmado.</Text>
      </View>
    </Page>
  );
}

export function AccountScreen() {
  const navigation = useNavigation<RootNavigation>();
  return (
    <Page>
      <TopBar />
      <View style={styles.screenHeadingBlock}>
        <Text style={styles.heading}>Sua conta</Text>
        <Text style={styles.subheading}>Entre para acompanhar seus pedidos e dados.</Text>
      </View>
      <View style={styles.accountPanel}>
        <Avatar initials="IC" large />
        <Text style={styles.sectionHeading}>Bem-vinda à IClean</Text>
        <Text style={styles.subheading}>Acesse sua conta ou crie um cadastro gratuito.</Text>
        <Button title="Entrar ou criar conta" icon={ArrowRight} onPress={() => navigation.navigate("SignIn", { role: "client" })} />
        <Button title="Acessar como profissional" tone="light" icon={Brush} onPress={() => navigation.navigate("SignIn", { role: "pro" })} />
      </View>
      <View style={styles.infoRow}>
        <MessageCircle size={18} color={colors.green} />
        <Text style={styles.small}>Precisa de ajuda? Fale com o suporte IClean.</Text>
      </View>
    </Page>
  );
}

export function SignInScreen({ route, navigation }: SignInProps) {
  const [role, setRole] = useState<"client" | "pro">(route.params?.role ?? "client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Preencha seus dados", "Informe seu e-mail ou telefone e sua senha para continuar.");
      return;
    }
    if (role === "pro") navigation.replace("CleanerDashboard");
    else navigation.replace("Tabs");
  };

  return (
    <Page>
      <TopBar back={() => navigation.goBack()} />
      <View style={styles.screenHeadingBlock}>
        <Text style={styles.heading}>Acesse sua conta</Text>
        <Text style={styles.subheading}>Entre para continuar com a IClean.</Text>
      </View>
      <View style={styles.roleSwitch}>
        <Pressable onPress={() => setRole("client")} style={[styles.roleChoice, role === "client" && styles.roleChoiceActive]}>
          <UserRound size={17} color={role === "client" ? colors.blue : colors.muted} />
          <Text style={[styles.optionText, role === "client" && styles.optionTextSelected]}>Sou cliente</Text>
        </Pressable>
        <Pressable onPress={() => setRole("pro")} style={[styles.roleChoice, role === "pro" && styles.roleChoiceActive]}>
          <Brush size={17} color={role === "pro" ? colors.blue : colors.muted} />
          <Text style={[styles.optionText, role === "pro" && styles.optionTextSelected]}>Sou diarista</Text>
        </Pressable>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>E-mail ou telefone</Text>
        <TextInput
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={setEmail}
          placeholder="voce@email.com"
          placeholderTextColor="#87969E"
          style={styles.input}
          value={email}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          onChangeText={setPassword}
          placeholder="Sua senha"
          placeholderTextColor="#87969E"
          secureTextEntry
          style={styles.input}
          value={password}
        />
        <Pressable onPress={() => Alert.alert("Recuperar senha", "O envio de recuperação será ativado quando a autenticação estiver conectada.")} style={styles.forgotLink}>
          <Text style={styles.linkText}>Esqueci minha senha</Text>
        </Pressable>
        <Button title="Entrar" icon={ArrowRight} onPress={submit} />
        <Text style={[styles.small, styles.centerText]}>Acesso demonstrativo, sem autenticação conectada.</Text>
      </View>
    </Page>
  );
}

export function BookingScreen({ navigation }: NativeStackScreenProps<RootStackParamList, "Booking">) {
  const [property, setProperty] = useState("Casa");
  const [service, setService] = useState("Padrão");
  const [rooms, setRooms] = useState(2);
  const [baths, setBaths] = useState(1);
  const [date, setDate] = useState("Sex, 02");
  const [period, setPeriod] = useState("Manhã");
  const amount = 130 + Math.max(rooms - 2, 0) * 15 + Math.max(baths - 1, 0) * 20 + (service === "Completa" ? 50 : 0);

  return (
    <Page>
      <TopBar back={() => navigation.goBack()} />
      <View style={styles.screenHeadingBlock}>
        <Text style={styles.heading}>Vamos agendar sua limpeza</Text>
        <Text style={styles.subheading}>Conte um pouco sobre o seu lar para ver profissionais disponíveis.</Text>
      </View>
      <View style={styles.card}>
        <SectionTitle title="Tamanho do imóvel" />
        <View style={styles.choiceGroup}>
          {["Casa", "Apartamento", "Sobrado"].map((item) => <Choice key={item} title={item} selected={property === item} onPress={() => setProperty(item)} />)}
        </View>
        <Counter label="Quartos" value={rooms} onChange={setRooms} />
        <Counter label="Banheiros" value={baths} onChange={setBaths} />
      </View>
      <View style={styles.card}>
        <SectionTitle title="Tipo de serviço" />
        {["Padrão", "Completa"].map((item) => (
          <Pressable key={item} onPress={() => setService(item)} style={[styles.serviceOption, service === item && styles.serviceOptionActive]}>
            <View style={[styles.serviceIcon, service === item && styles.serviceIconActive]}><Brush size={19} color={service === item ? colors.blue : colors.muted} /></View>
            <View style={styles.flexOne}>
              <Text style={styles.label}>{item === "Padrão" ? "Padrão (manutenção)" : "Completa / pesada"}</Text>
              <Text style={styles.small}>{item === "Padrão" ? "Limpeza dos ambientes e superfícies." : "Uma limpeza mais detalhada, do chão aos armários."}</Text>
            </View>
            {service === item && <CheckCircle2 size={19} color={colors.blue} />}
          </Pressable>
        ))}
      </View>
      <View style={styles.card}>
        <View style={styles.row}><CalendarDays size={19} color={colors.blue} /><SectionTitle title="Quando prefere?" /></View>
        <View style={styles.choiceGroup}>
          {["Qui, 01", "Sex, 02", "Sáb, 03", "Seg, 05"].map((item) => <Choice key={item} title={item} selected={date === item} onPress={() => setDate(item)} />)}
        </View>
        <View style={styles.choiceGroup}>
          {["Manhã", "Tarde"].map((item) => <Choice key={item} title={item} selected={period === item} onPress={() => setPeriod(item)} />)}
        </View>
      </View>
      <View style={styles.estimate}>
        <View><Text style={styles.small}>Estimativa inicial</Text><Text style={styles.price}>R$ {amount}</Text></View>
        <Text style={styles.small}>{date} • {period.toLowerCase()}</Text>
      </View>
      <Button title="Ver profissionais disponíveis" icon={ArrowRight} onPress={() => navigation.navigate("Professionals")} />
    </Page>
  );
}

export function ProfessionalsScreen({ navigation }: NativeStackScreenProps<RootStackParamList, "Professionals">) {
  const [filter, setFilter] = useState("Todas");
  const filtered = filter === "Todas" ? pros : filter === "Mais bem avaliadas" ? pros.filter((pro) => Number(pro.rating) >= 4.9) : pros.filter((pro) => pro.price <= 135);
  return (
    <Page>
      <TopBar back={() => navigation.goBack()} />
      <View style={styles.screenHeadingBlock}>
        <Text style={styles.heading}>Profissionais disponíveis</Text>
        <Text style={styles.subheading}>Pessoas verificadas e avaliadas perto de você.</Text>
      </View>
      <View style={styles.locationStrip}><MapPin size={17} color={colors.blue} /><Text style={styles.label}>Parque Paulista, Francisco Morato</Text><ChevronRight size={17} color={colors.muted} /></View>
      <View style={styles.choiceGroup}>
        {["Todas", "Mais bem avaliadas", "Até R$ 135"].map((item) => <Choice key={item} title={item} selected={filter === item} onPress={() => setFilter(item)} />)}
      </View>
      <Text style={styles.small}>{filtered.length} profissionais compatíveis com seu pedido</Text>
      {filtered.map((pro) => (
        <View key={pro.id} style={styles.proCard}>
          <View style={styles.between}>
            <View style={styles.row}><Avatar initials={pro.initials} image={pro.image} /><View style={styles.proDetails}><Text style={styles.proName}>{pro.name}</Text><Text style={styles.small}>{pro.distance}</Text></View></View>
            <View style={styles.rating}><Star size={14} color={colors.amber} fill={colors.amber} /><Text style={styles.ratingText}>{pro.rating}</Text></View>
          </View>
          <Text style={styles.small}>{pro.note}</Text>
          <View style={styles.divider} />
          <View style={styles.between}>
            <View><Text style={styles.small}>{pro.reviews} avaliações</Text><Text style={styles.proPrice}>A partir de R$ {pro.price}</Text></View>
            <Pressable accessibilityRole="button" onPress={() => navigation.navigate("ProProfile", { proId: pro.id })} style={styles.smallButton}>
              <Text style={styles.smallButtonText}>Ver perfil</Text><ArrowRight size={16} color={colors.blue} />
            </Pressable>
          </View>
        </View>
      ))}
      <View style={styles.infoRow}><ShieldCheck size={18} color={colors.green} /><Text style={styles.small}>Perfis e avaliações ajudam você a escolher com confiança.</Text></View>
    </Page>
  );
}

export function ProProfileScreen({ route, navigation }: ProfileProps) {
  const [day, setDay] = useState("Sexta, 02");
  const pro = pros.find((item) => item.id === route.params.proId) ?? pros[0];
  return (
    <Page>
      <TopBar back={() => navigation.goBack()} />
      <View style={styles.profileHero}>
        <Avatar initials={pro.initials} image={pro.image} large />
        <View style={styles.badge}><BadgeCheck size={15} color={colors.green} /><Text style={styles.badgeText}>Perfil verificado</Text></View>
        <Text style={styles.profileName}>{pro.name}</Text>
        <View style={styles.row}><Star size={16} color={colors.amber} fill={colors.amber} /><Text style={styles.label}>{pro.rating}</Text><Text style={styles.small}>({pro.reviews} avaliações)</Text></View>
        <Text style={styles.small}>{pro.distance} • Parque Paulista</Text>
      </View>
      <View style={styles.card}>
        <SectionTitle title="Sobre a profissional" />
        <Text style={styles.subheading}>{pro.note}. Atendimento cuidadoso, pontual e combinado com você.</Text>
        <View style={styles.profileStats}><View style={styles.stat}><Text style={styles.statValue}>4 anos</Text><Text style={styles.small}>de experiência</Text></View><View style={styles.stat}><Text style={styles.statValue}>98%</Text><Text style={styles.small}>recomendam</Text></View></View>
      </View>
      <View style={styles.card}>
        <SectionTitle title="Disponibilidade" />
        <View style={styles.choiceGroup}>
          {["Sexta, 02", "Sábado, 03", "Segunda, 05"].map((item) => <Choice key={item} title={item} selected={day === item} onPress={() => setDay(item)} />)}
        </View>
        <View style={styles.infoRow}><Clock3 size={17} color={colors.blue} /><Text style={styles.small}>Manhã ou tarde, conforme confirmação.</Text></View>
      </View>
      <View style={styles.estimate}><View><Text style={styles.small}>Diária a partir de</Text><Text style={styles.price}>R$ {pro.price}</Text></View><View style={styles.badge}><Heart size={14} color={colors.green} /><Text style={styles.badgeText}>Bem avaliada</Text></View></View>
      <Button title="Solicitar agendamento" icon={CalendarCheck} onPress={() => navigation.navigate("Booking")} />
    </Page>
  );
}

export function CleanerDashboardScreen({ navigation }: NativeStackScreenProps<RootStackParamList, "CleanerDashboard">) {
  const [available, setAvailable] = useState(true);
  const [request, setRequest] = useState<"pending" | "accepted" | "declined">("pending");
  return (
    <Page>
      <View style={styles.topBar}>
        <View style={styles.row}><Avatar initials="DS" /><View><Text style={styles.label}>Bom dia, Dona Sônia!</Text><Text style={styles.small}>Seu painel profissional</Text></View></View>
        <Pressable accessibilityLabel="Notificações" onPress={() => Alert.alert("Notificações", "Você está em dia por aqui.")}><Bell size={21} color={colors.ink} /></Pressable>
      </View>
      <View style={[styles.availabilityCard, available ? styles.available : styles.unavailable]}>
        <View style={styles.flexOne}><Text style={styles.label}>{available ? "Disponível para novos pedidos" : "Pausada para novos pedidos"}</Text><Text style={styles.small}>{available ? "Você pode receber solicitações." : "Ative quando quiser receber trabalho."}</Text></View>
        <Switch value={available} onValueChange={setAvailable} trackColor={{ false: colors.line, true: "#9ADCC2" }} thumbColor={available ? colors.green : "#FFFFFF"} />
      </View>
      <View style={styles.between}><Text style={styles.heading}>Novo pedido</Text><View style={styles.badge}><Text style={styles.badgeText}>Aguardando</Text></View></View>
      {request === "pending" ? (
        <View style={styles.card}>
          <View style={styles.row}><Avatar initials="CM" /><View><Text style={styles.sectionHeading}>Carla M.</Text><Text style={styles.small}>Hoje • 13h30 • 0,8 km</Text></View></View>
          <View style={styles.divider} />
          <View style={styles.detailsGrid}><Text style={styles.small}>Casa • 2 quartos • 1 banheiro</Text><Text style={styles.small}>Limpeza padrão • 4 a 5 horas</Text></View>
          <View style={styles.estimate}><Text style={styles.small}>Valor combinado</Text><Text style={styles.price}>R$ 140</Text></View>
          <Button title="Aceitar faxina" tone="green" icon={Check} onPress={() => setRequest("accepted")} />
          <Button title="Recusar pedido" tone="light" onPress={() => setRequest("declined")} />
          <Pressable onPress={() => Alert.alert("Detalhes do pedido", "Casa no Parque Paulista. O endereço é compartilhado após a confirmação.")} style={styles.centerLink}><Text style={styles.linkText}>Ver detalhes</Text><ChevronRight size={16} color={colors.blue} /></Pressable>
        </View>
      ) : (
        <View style={styles.card}>
          <View style={styles.statusIcon}>{request === "accepted" ? <CheckCircle2 size={28} color={colors.green} /> : <CalendarDays size={28} color={colors.muted} />}</View>
          <Text style={styles.sectionHeading}>{request === "accepted" ? "Faxina confirmada" : "Pedido recusado"}</Text>
          <Text style={styles.subheading}>{request === "accepted" ? "Carla M. foi avisada e o compromisso entrou na sua agenda." : "Esse pedido saiu da sua lista."}</Text>
          <Button title="Ver novo pedido" tone="light" onPress={() => setRequest("pending")} />
        </View>
      )}
      <View style={styles.card}>
        <SectionTitle title="Hoje à tarde" detail="14h30" />
        <View style={styles.row}><Avatar initials="RS" /><View style={styles.flexOne}><Text style={styles.label}>Roberto S.</Text><Text style={styles.small}>Limpeza completa • Jardim Alegria</Text></View></View>
        <View style={styles.choiceGroup}><Button title="Abrir trajeto" tone="light" icon={Navigation} onPress={() => Alert.alert("Trajeto", "A abertura de mapas será conectada nesta etapa.")} /></View>
      </View>
      <View style={styles.metricsRow}><View style={styles.metric}><Text style={styles.metricValue}>4.9</Text><Text style={styles.small}>avaliação</Text></View><View style={styles.metric}><Text style={styles.metricValue}>12</Text><Text style={styles.small}>serviços no mês</Text></View><View style={styles.metric}><Text style={styles.metricValue}>R$ 1.680</Text><Text style={styles.small}>este mês</Text></View></View>
      <Button title="Sair do painel" tone="light" onPress={() => navigation.replace("Tabs")} />
    </Page>
  );
}