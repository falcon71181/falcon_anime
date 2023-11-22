import createHttpError, { HttpError } from "http-errors";

export const extractAnimes = ($, selectors) => {
    try {
        const animes = [];
        $(selectors).each((index, element) => {

            const animeID = $(element).find(".film-detail .film-name .dynamic-name")?.attr("href")?.slice(1) || null;
            const animeNAME = $(element).find(".film-detail .film-name .dynamic-name")?.text()?.trim() ?? "UNKNOWN ANIME";
            const noOfSubEps = $(element).find(".film-poster .tick .tick-sub")?.text() || null;
            const noOfDubEps = $(element).find(".film-poster .tick .tick-dub")?.text() || null;
            const totalNoOfEps = $(element).find(".film-poster .tick .tick-eps")?.text() || null;
            const epLengthTime = $(element).find(".film-detail .fd-infor .fdi-duration")?.text()?.trim() ?? "UNKNOWN";
            const adultRated = $(element).find(".film-poster .tick-rate")?.text()?.trim() || null;
            const animeIMG = $(element).find(".film-poster .film-poster-img").attr("data-src") || null;

            animes.push({
                id: animeID,
                name: animeNAME,
                img: animeIMG,
                sub: noOfSubEps,
                dub: noOfDubEps,
                eps: totalNoOfEps,
                duration: epLengthTime,
                rated: adultRated === "18+",
            });
        })
        return animes;
    } catch (err) {

        ////////////////////////////////////////////////////////////////
        console.error("Error in extractAnimes :", err); // for TESTING//
        ////////////////////////////////////////////////////////////////
  
          if (err instanceof AxiosError) {
              throw createHttpError(
                err?.response?.status || 500,
                err?.response?.statusText || "Something went wrong"
              )
            }
            throw createHttpError.InternalServerError(err?.message);
    }
}

export const extractTOP10ANIMES = ($, periodType) => {
    try {
        const animes = [];
        const selectors = `#top-viewed-${periodType} ul li`;

        $(selectors).each((index, element) => {
            const animeID = $(element).find(".film-detail .film-name .dynamic-name")?.attr("href")?.slice(1) || null;
            const animeNAME = $(element).find(".film-detail .film-name .dynamic-name")?.text()?.trim() ?? "UNKNOWN ANIME";
            const animeRANK = $(element).find(".film-number span")?.text()?.trim() || null;
            const noOfSubEps = $(element).find(".film-detail .fd-infor .tick-item.tick-sub")?.text() || null;
            const noOfDubEps = $(element).find(".film-detail .fd-infor .tick-item.tick-dub")?.text() || null;
            const totalNoOfEps = $(element).find(".film-detail .fd-infor .tick-item.tick-eps")?.text() || null;
            const animeIMG = $(element).find(".film-poster .film-poster-img")?.attr("data-src")?.trim() || null

            animes.push({
                sno: index,
                id: animeID,
                name: animeNAME,
                rank: animeRANK,
                img: animeIMG,
                sub: noOfSubEps,
                dub: noOfDubEps,
                eps: totalNoOfEps,
                });
        }) 
        return animes;
    } catch (err) {

        /////////////////////////////////////////////////////////////////////
        console.error("Error in extractTOP10ANIMES :", err); // for TESTING//
        /////////////////////////////////////////////////////////////////////
  
          if (err instanceof AxiosError) {
              throw createHttpError(
                err?.response?.status || 500,
                err?.response?.statusText || "Something went wrong"
              )
            }
            throw createHttpError.InternalServerError(err?.message);
    }
}

export const extractTrendingAnime = ($, selectors) => {
    try {
        const animes = [];

        $(selectors).each((index, element) => {
            const animeID = $(element).find(".item .film-poster")?.attr("href")?.slice(1) || null;
            const animeNAME = $(element).find(".item .number .film-title.dynamic-name")?.text()?.trim() ?? "UNKNOWN ANIME";
            const animeIMG = $(element).find(".item .film-poster .film-poster-img")?.attr("data-src")?.trim();

            animes.push({
                sno: index,
                id: animeID,
                name: animeNAME,
                img: animeIMG
            })
        })
        return animes;
    } catch (err) {

        ///////////////////////////////////////////////////////////////////////
        console.error("Error in extractTrendingAnime :", err); // for TESTING//
        ///////////////////////////////////////////////////////////////////////
  
          if (err instanceof AxiosError) {
              throw createHttpError(
                err?.response?.status || 500,
                err?.response?.statusText || "Something went wrong"
              )
            }
            throw createHttpError.InternalServerError(err?.message);
    }
}

export const extractTopAiringAnimes = ($, selectors) => {
    try {
        const animes = [];

        $(selectors).each((index, element) => {
            const animeID = $(element).find(".film-detail .film-name .dynamic-name")?.attr("href")?.slice(1)?.trim() || null;
            const animeNAME = $(element).find(".film-detail .film-name .dynamic-name")?.text()?.trim() ?? "UNKNOWN ANIME";
            const animeIMG = $(element).find(".film-poster a .film-poster-img")?.attr("data-src")?.trim();
  
            animes.push({
              sno: index,
              id: animeID,
              name: animeNAME,
              img: animeIMG
            })
          })
        return animes;
    } catch (err) {

        /////////////////////////////////////////////////////////////////////////
        console.error("Error in extractTopAiringAnimes :", err); // for TESTING//
        /////////////////////////////////////////////////////////////////////////
  
          if (err instanceof AxiosError) {
              throw createHttpError(
                err?.response?.status || 500,
                err?.response?.statusText || "Something went wrong"
              )
            }
            throw createHttpError.InternalServerError(err?.message);
    }
}

export const extractSpotLightAnime = ($, selectors) => {
  try {
    const animes = [];

    $(selectors).each((index, element) => {
      const animeID = $(element).find(".deslide-item-content .desi-buttons a")?.last()?.attr("href")?.slice(1)?.trim() || null;
      const animeNAME = $(element).find(".deslide-item-content .desi-head-title.dynamic-name")?.text()?.trim() ?? "UNKNOWN ANIME";
      const animeRANK = $(element).find(".deslide-item-content .desi-sub-text")?.text()?.trim()?.split(" ")[0]?.slice(1) || null;
      const animeIMG = $(element).find(".deslide-cover .deslide-cover-img .film-poster-img")?.attr("data-src")?.trim();
      const animeDESCRIPTION = $(element).find(".deslide-item-content .desi-description")?.text()?.split("[")?.shift()?.trim() ?? "UNKNOW ANIME DESCRIPTION";
      const animeEXTRA = $(element).find(".deslide-item-content .sc-detail .scd-item").map((i, el) => $(el).text().trim()).get();

      const episodeDetails = animeEXTRA[4].split(/\s+/).map(Number) || null;
      const animeExtraInfo = {
        category: animeEXTRA[0] || null,
        duration: animeEXTRA[1] || null,
        releasedDay: animeEXTRA[2] || null,
        quality: animeEXTRA[3] || null,
        sub: episodeDetails[0] || null,
        dub: episodeDetails[1] || null,
        eps: episodeDetails[2] || null
      };

      animes.push({
        sno: index,
        id: animeID,
        name: animeNAME,
        rank: animeRANK,
        img: animeIMG,
        extra: animeExtraInfo,
        description: animeDESCRIPTION
      })
    })

    return animes;
  } catch (err) {

    ////////////////////////////////////////////////////////////////////////
    console.error("Error in extractSpotLightAnime :", err); // for TESTING//
    ////////////////////////////////////////////////////////////////////////

      if (err instanceof AxiosError) {
          throw createHttpError(
            err?.response?.status || 500,
            err?.response?.statusText || "Something went wrong"
          )
        }
        throw createHttpError.InternalServerError(err?.message);
}
}

export const extractMostPopularAnimes = ($, selectors) => {
  try {
    const animes = [];

    $(selectors).each((index, element) => {
      
      const animeID = $(element).find(".film-detail .dynamic-name")?.attr("href")?.slice(1).trim() || null;
      const animeNAME = $(element).find(".film-detail .dynamic-name")?.text()?.trim() ?? "UNKNOWN ANIME";
      const animeIMG = $(element).find(".film-poster .film-poster-img")?.attr("data-src")?.trim() || null;
      const epSUB = $(selectors).find(".fd-infor .tick .tick-sub")?.text()?.trim() || null ;
      const epDUB = $(selectors).find(".fd-infor .tick .tick-dub")?.text()?.trim() || null ;
      const animeTYPE = $(selectors)?.find(".fd-infor .tick")?.text()?.trim()?.replace(/[\s\n]+/g, " ")?.split(" ")?.pop() || null;

      animes.push({
        sno: index,
        id: animeID,
        name: animeNAME,
        type: animeTYPE,
        img: animeIMG,
        sub: epSUB,
        dub: epDUB
      })
    })
    return animes;

  } catch (err) {

    ///////////////////////////////////////////////////////////////////////////
    console.error("Error in extractMostPopularAnimes :", err); // for TESTING//
    ///////////////////////////////////////////////////////////////////////////

      if (err instanceof AxiosError) {
          throw createHttpError(
            err?.response?.status || 500,
            err?.response?.statusText || "Something went wrong"
          )
        }
        throw createHttpError.InternalServerError(err?.message);
}
}

export const extractGenreList = ($, selectors) => {
  try {
    const genres = [];

    $(selectors).each((index, element) => {
      genres.push(`${$(element)?.text()?.trim() || null}`);
    });
    return genres;
  } catch (err) {

    ///////////////////////////////////////////////////////////////////
    console.error("Error in extractGenreList :", err); // for TESTING//
    ///////////////////////////////////////////////////////////////////

      if (err instanceof AxiosError) {
          throw createHttpError(
            err?.response?.status || 500,
            err?.response?.statusText || "Something went wrong"
          )
        }
        throw createHttpError.InternalServerError(err?.message);
}
}

export const extractAboutInfo = ($, selectors) => {
  try {
    const info = [];

    $(selectors).each((index, element) => {
      const animeID = $(selectors)?.find(".anisc-detail .film-buttons a.btn-play")?.attr("href")?.split("/")?.pop() || null;
      const animeNAME = $(selectors)?.find(".anisc-detail .film-name.dynamic-name")?.text()?.trim() ?? "UNKNOWN ANIME";
      const animeIMG = $(selectors)?.find(".film-poster .film-poster-img")?.attr("src")?.trim() || null;
      const animeRATING = $(`${selectors} .film-stats .tick .tick-pg`)?.text()?.trim() || null;
      const animeQUALITY = $(`${selectors} .film-stats .tick .tick-quality`)?.text()?.trim() || null;
      const epSUB = $(`${selectors} .film-stats .tick .tick-sub`)?.text()?.trim() || null;
      const epDUB = $(`${selectors} .film-stats .tick .tick-dub`)?.text()?.trim() || null;
      const animeCategory = $(`${selectors} .film-stats .tick`)?.text()?.trim()?.replace(/[\s\n]+/g, " ")?.split(" ")?.at(-2) || null;
      const duration = $(`${selectors} .film-stats .tick`)?.text()?.trim()?.replace(/[\s\n]+/g, " ")?.split(" ")?.pop() || null;
      const animeDESCRIPTION = $(selectors)?.find(".anisc-detail .film-description .text")?.text()?.split("[")?.shift()?.trim() ?? "UNKNOW ANIME DESCRIPTION";

      info.push({
        id: animeID,
        name: animeNAME,
        img: animeIMG,
        rating: animeRATING,
        sub: epSUB,
        dub: epDUB,
        category: animeCategory,
        quality: animeQUALITY,
        duration: duration,
        description: animeDESCRIPTION  
      })
    })
    return info;
  } catch (err) {

    ///////////////////////////////////////////////////////////////////
    console.error("Error in extractAboutInfo :", err); // for TESTING//
    ///////////////////////////////////////////////////////////////////

      if (err instanceof AxiosError) {
          throw createHttpError(
            err?.response?.status || 500,
            err?.response?.statusText || "Something went wrong"
          )
        }
        throw createHttpError.InternalServerError(err?.message);
}
}

export const extractSeasonsInfo = ($, selectors) => {
  try {
    const seasons = [];

    $(selectors).each((index, element) => {

      const animeID = $(element)?.attr("href")?.slice(1)?.trim() || null;
      const animeNAME = $(element)?.attr("title")?.trim() ?? "UNKNOWN ANIME";
      const animeTITLE = $(element)?.find(".title")?.text()?.trim();
      const animeIMG = $(element)?.find(".season-poster")?.attr("style")?.split(" ")?.pop()?.split("(")?.pop()?.split(")")[0] || null

      seasons.push({
        sno: index,
        id: animeID,
        name: animeNAME,
        title: animeTITLE,
        img: animeIMG,
        isCurrent: $(element)?.hasClass("active"),
      });
    });
    return seasons;
  } catch (err) {

    ///////////////////////////////////////////////////////////////////
    console.error("Error in extractSeasonsInfo :", err); // for TESTING//
    ///////////////////////////////////////////////////////////////////

      if (err instanceof AxiosError) {
          throw createHttpError(
            err?.response?.status || 500,
            err?.response?.statusText || "Something went wrong"
          )
        }
        throw createHttpError.InternalServerError(err?.message);
}
}