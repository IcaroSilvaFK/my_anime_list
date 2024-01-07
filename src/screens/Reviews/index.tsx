import { FlatList, ScrollView, View } from "react-native";
import { LayoutContainer } from "../../shared";
import { HeaderWithConfig } from "../../components/organsms";
import { CardReview } from "../../components/atoms";

import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import { ReviewDTO } from "../../dtos/review.dto";
import { jikanApi } from "../../services/http.service";
import { useFocusEffect } from "@react-navigation/native";
import { Loading } from "./Loading";

export function Reviews() {
  const { top } = useSafeAreaInsets();

  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<ReviewDTO[]>([]);

  useFocusEffect(
    useCallback(() => {
      requestReviews();
    }, [])
  );

  const requestReviews = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = await jikanApi.get<{ data: ReviewDTO[] }>(
        `/recommendations/anime?page=${currentPage}`
      );

      setData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleRequestNextPage = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = await jikanApi.get<{ data: ReviewDTO[] }>(
        `/recommendations/anime?page=${currentPage}`
      );

      setData((prev) => [...prev, ...data]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  return (
    <LayoutContainer>
      <View style={[styles.container, { marginTop: top }]}>
        <View>
          {isLoading && (
            <FlatList
              data={Array.from({ length: 15 })}
              ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
              renderItem={() => <Loading />}
            />
          )}
          {!isLoading && (
            <FlatList
              ListHeaderComponent={() => <HeaderWithConfig />}
              data={data}
              renderItem={({ item }) => <CardReview {...item} />}
              ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
              onEndReached={() => {
                setCurrentPage((prev) => prev + 1);
                handleRequestNextPage();
              }}
              keyExtractor={(item) => `${item.mal_id}`}
            />
          )}
        </View>
      </View>
    </LayoutContainer>
  );
}
