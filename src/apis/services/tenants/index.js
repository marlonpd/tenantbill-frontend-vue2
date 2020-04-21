import ApiService from "@/apis/api";

export const TenantsService = {
    query(type, params) {
        return ApiService.query("tenants" + (type === "feed" ? "/feed" : ""), {
            params: params
        });
    },
    getAll() {
        return ApiService.getAll("/api/tenants");
    },
    get(slug) {
        return ApiService.get("tenant", slug);
    },
    create(params) {
        return ApiService.post("tenant", { tenant: params });
    },
    update(slug, params) {
        return ApiService.update("tenant", slug, { tenant: params });
    },
    destroy(slug) {
        return ApiService.delete(`tenant/${slug}`);
    }
};
