import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { ReviewDTO } from "../../../dtos/review.dto";
import { Avatar } from "../Avatar";
import { formatDate } from "../../../utils/formatDate";

import { styles } from "./styles";
import { Eye } from "lucide-react-native";
import { resources } from "../../../utils/resources";
import { useNavigation } from "@react-navigation/native";

export function CardReview(props: ReviewDTO) {
  const { user, content, entry, date } = props;

  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerUser}>
          <Avatar username={user?.username} />
          <Text style={styles.headerUsername}>{user.username}</Text>
        </View>
        <Text style={styles.headerDate}>
          {formatDate(new Date(date), {
            dateStyle: "long",
          })}
        </Text>
      </View>
      <View style={styles.recommendationBody}>
        <FlatList
          data={entry}
          renderItem={({ item }) => (
            <View style={styles.recommendationCard}>
              <View style={styles.recommendationHeader}>
                <Text style={styles.recommendationTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <TouchableOpacity
                  style={styles.recommendationButton}
                  onPress={() =>
                    navigator.navigate("viewDetails", {
                      animeId: item.mal_id as number,
                    })
                  }
                >
                  <Text style={styles.recommendationButtonText}>
                    Ver detalhes
                  </Text>
                  <Eye color={resources.colors.violet500} />
                </TouchableOpacity>
              </View>
              <Image
                source={{ uri: item?.images?.jpg?.image_url }}
                style={styles.recommendationImage}
              />
            </View>
          )}
          keyExtractor={(item) => item.mal_id?.toString() as string}
        />
      </View>
      <Text style={styles.recommendationContent}>{content}</Text>
    </View>
  );
}
