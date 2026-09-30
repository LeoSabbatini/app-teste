import ComentarioCard from "@/components/Comentario";
import { Link } from "expo-router";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const COMENTARIOS = [
  {
    id: "1",
    autor: "Lucas",
    nota: 5,
    texto: "Produto excelente, superou as expectativas",
  },
  { id: "2", autor: "Leo", nota: 3, texto: "Produto mediano" },
  { id: "3", autor: "Marcola", nota: 4, texto: "Produto nogger" },
  {
    id: "4",
    autor: "Maniaco do Parque",
    nota: 5,
    texto: "Produto excelente, superou as expectativas",
  },
];

export default function Index() {
  return (
    <ScrollView style={style.container}>
      <View style={style.header}>
        <Text style={style.headerText}> Mercado Livre</Text>
      </View>
      <Image
        style={style.imagemProduto}
        source={{
          uri: "https://www.apple.com/v/macbook-pro/ax/images/overview/welcome/hero_endframe__fwev9ebh42mq_xlarge.jpg",
        }}
      />
      <Text style={style.produtoNome}>MacBook 14 MS - Apple</Text>
      <Text style={style.produtoPreco}>R$ 21,189,90</Text>

      <TouchableOpacity style={style.btnComprar}>
        <Text style={style.btnText}>Comprar Agora</Text>
      </TouchableOpacity>

      <Text style={style.descriptionTitle}>Descrição</Text>
      <Text style={style.description}>
        O MacBook Pro de 14 polegadas com chip M5 é um notebook profissional da
        Apple voltado para alto desempenho, eficiência energética e recursos
        avançados de inteligência artificial
      </Text>
      <View style={style.separator}></View>

    <Link href={"/vendedor"} asChild>
      <TouchableOpacity style={style.sellerCard}>
        <Image
          style={style.sellerAvatar}
          source={require("@/assets/images/watermarked_img_13023633036407527991.jpg")
          }
        />
        <View>
          <Text style={style.sellerLabel}>Vendedor</Text>
          <Text style={style.sellerName}>John Porkuai</Text>
        </View>
      </TouchableOpacity>
    </Link>

      <View style={style.separator}></View>
      <Text style={style.comentarioTitle}>Comentarios</Text>

      <FlatList
        scrollEnabled={false}
        data={COMENTARIOS}
        renderItem={({ item }) => (
          <ComentarioCard
            autor={item.autor}
            nota={item.nota}
            texto={item.texto}
          />
        )}
      />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  imagemProduto: {
    width: "100%",
    height: 240,
  },

  container: {
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
  },

  header: {
    backgroundColor: "#ffe600",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 12,
  },

  headerText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },

  produtoNome: {
    fontSize: 18,
    fontWeight: "medium",
    marginTop: 10, //Distancia da imagem
    marginBottom: 8,
    paddingHorizontal: 10,
  },

  produtoPreco: {
    fontSize: 28,
    fontWeight: "normal",
    marginBottom: 24, //Distancia do botão comprar
    paddingHorizontal: 10,
  },

  btnComprar: {
    backgroundColor: "#ffe600",
    borderRadius: 8,
    paddingVertical: 14,
    marginHorizontal: 10,
    alignItems: "center",
  },

  btnText: {
    fontSize: 15,
    fontWeight: "bold",
  },

  descriptionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 8,
    paddingHorizontal: 15,
    marginTop: 20,
  },

  description: {
    fontSize: 14,
    paddingHorizontal: 15,
  },

  separator: {
    height: 1,
    backgroundColor: "#000",
    marginVertical: 100,
  },
  comentarioTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 8,
    paddingHorizontal: 15,
  },
  sellerCard: {
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: "#eee",
    marginHorizontal: 15,
  },
  sellerName: {
    fontSize: 15,
    fontWeight: 700,
  },
  sellerAvatar: {
    height: 46,
    width: 46,
    borderRadius: 23,
    marginRight: 12,
  },
  sellerLabel: {
    fontSize: 12,
    color: "#888",
  },
});
