export const query = (query) => {

    if (Array.isArray(query)) {
        return query[0].toString();
    }

    return query.toString()
}