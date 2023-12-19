import Route from "./Route";

const HeadMeta = (options: any, head : any) => {
    let { settings, navigation, footer } = options ?? {};
    
    let url = head?.url ?? Route.index(true);
    let siteName =  settings?.site_name ?? "DiY Homework Blog"; 
    let siteDescription = head?.description ?? settings?.site_description ?? "DiY Homework Blog là một blog cá nhân về tech DiY.";
    let siteTitle = head?.title ? `${head.title} | ${siteName}` : siteName;
    let ogImage = head?.image ?? Route.defaultCover(true);
    let author = head?.author ?? settings?.author ?? "DiY Homework";
  
    return {
        url,
        siteName,
        siteDescription,
        siteTitle,
        ogImage,
        author,
    }
}

export default HeadMeta;