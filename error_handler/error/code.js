module.exports = {
    // Input params
    100: "invalid_param",
    101: "password_required",
    102: "country_code_required",
    103: "otp_code_required",
    104: "",
    105: "",
    106: "",
    107: "access_token_required",
    108: "invalid_product_feature",
    109: "invalid_permission",
    // Not found
    110: "user_not_found",
    111: "role_not_found",
    112: "parent_category_not_found",
    113: "category_not_found",
    114: "post_not_found",
    115: "language_not_found",
    116: "author_not_found",
    117: "configuration_not_found",
    118: "faq_category_not_found",
    119: "faq_not_found",
    120: "portfolio_not_found",
    121: "watchlist_not_found",
    122: "portfolio_datxbot_not_found",
    123: "rating_stocks_not_found",
    124: "founder_not_found",
    125: "partner_not_found",
    126: "exchange_fund_not_found",
    // Expired
    130: "code_expired",
    131: "access_token_expired",
    132: "refresh_token_expired",
    // Checked
    150: "unverified_user",
    151: "deleted_user",
    152: "incorrect_country_code",
    153: 'twillio_services_error',
    154: 'twillio_too_many_requests',
    159: 'password_too_weak',
    160: 'limited_watchlist',

    165: 'invalid_created_from',
    166: 'invalid_created_to',
    167: 'created_from_larger_created_to',
    // Already exist
    170: 'exist_email',
    171: 'exist_phone',
    175: 'exist_portfolio_name',
    177: 'exist_slug_category',
    179: 'exist_user',
    180: 'already_post_using_category',
    185: 'delete_portfolio_fail',
    186: 'edit_portfolio_fail',
    187: 'create_portfolio_fund_fail',
    188: 'create_portfolio_fail',
    189: 'limit_demo_portfolio',
    190: 'too_many_requests',
    191: 'incorrect_pushlish_at_type',
    192: 'update_exchange_fund_fail',
    // 
    193: 'require_switch_is_default_to_another',
    194: 'cannot_remove_auth_role',
    195: 'incorrect_password',
    196: 'unremoveable_real_portfolio',
    197: 'invalid_service_code',
    198: 'uneditable_system_admin',
    199: 'login_fail',
    1001: 'create_device_tracking_fail',
    1002: 'connect_datx_fail',
    1003: 'require_option',
    1004: 'device_id_required',
    1005: 'device_not_found',
    1006: 'invalid_device',
    1200: 'watchlist_name_too_long',
    1201: 'portfolio_name_too_long',
    1995: 'invalid_portfolio_fund',
    1996: 'invalid_portfolio_blacklist',
    1997: 'invalid_portfolio_status',
    1998: 'incorrect_credentials',
    1999: 'credentials_required',
    2000: '',
    2001: 'retrieve_datx_access_token_fail',
    2009: 'datx_ratingsectors_rate_fail',
    2010: 'datx_cashposition_fail',
    2011: 'datx_ratingstocks_fail',
    2012: 'datx_ratingstocks_overview_fail',
    2013: 'datx_ratingstocks_datxrating_fail',
    2014: 'datx_ratingsectors_heatmap_cap_fail',
    2015: 'datx_ratingsectors_heatmap_capvol_fail',
    2016: 'datx_ratingsectors_heatmap_tradingval_fail',
    2017: 'datx_ratingsectors_heatmap_tradingvol_fail',
    2018: 'datx_ratingsectors_heatmap_tradingforeign_fail',
    2019: 'datx_ratingsectors_status_chart_fail',
    2020: 'datx_portfolio_available_assets_fail',
    2021: 'datx_portfolio_available_stocks_fail',
    2022: 'datx_ratingstocks_data_detail_fail',
    2023: 'datx_ratingstocks_sector_datxchart_fail',
    2024: 'datx_ratingstocks_sector_datxrating_fail',
    2025: 'datx_watchlist_stocks_data_fail',
    2026: 'datx_ratingsectors_overview_fail',
    2027: 'datx_ratingsectors_data_detail_fail',
    2028: 'datx_portfolio_get_sub_account_type_fail',
    2029: 'datx_portfolio_select_sub_account_type_fail',
    2050: 'datx_portfolio_create_order_fail',
    2051: 'datx_portfolio_get_orders_fail',
    2052: 'datx_portfolio_edit_orders_fail',
    2053: 'datx_portfolio_cancel_orders_fail',
    2098: 'fund_type_required',
    2099: 'fund_required',
    2100: 'sector_required',
    2101: 'time_distance_required',
    2102: 'stock_code_required',
    2103: 'portfolio_id_required',
    2104: 'trading_type_required',
    2105: 'trading_order_type_required',
    2106: 'trading_stock_required',
    2107: 'trading_quantity_required',
    2108: 'trading_price_required',
    2109: 'order_id_required',
    2120: 'sectors_array_required',
    2122: 'invalid_order_type',
    2123: 'invalid_trading_type',
    2124: 'codes_array_required',
    2125: 'invalid_time_type',
    2126: 'trading_pass_required',
    2127: 'trading_pass_too_short',
    2158: 'sub_account_required',
    2159: 'invalid_verification_method',
    2200: 'invalid_limit_type',
    2201: 'invalid_page_type',
    2202: 'invalid_order_sort_type',
    2203: 'invalid_purchaser_id',
    2204: 'invalid_organization_id',
    2209: 'organization_not_found',
    2210: 'purchaser_not_found',
    2211: 'invalid_identification_type',
    2212: 'identification_data_missing',
    2213: 'purchaser_type_not_found',
    2214: 'exist_purchaser',
    2215: 'invalid_status_type',
    2216: 'invalid_boolean',
    2217: 'invalid_filter_type',
    2218: 'invalid_search_type',
    2219: 'invalid_link_platform',
    2220: 'link_platform_data_missing',
    2221: 'invalid_notice_market_status',
    2224: 'organization_id_required',
    2226: 'special_character_found',
    2227: 'organization_name_too_long',
    2228: 'organization_creater_required',
    2229: 'organization_name_required',
    2230: 'organization_exist',
    2231: 'product_price_required',
    2232: 'product_name_requried',
    2233: 'invalid_product_status',
    2234: 'product_id_required',
    2235: 'invalid_product_id',
    2236: 'product_not_found',
    2237: 'product_enabled',
    2238: 'invalid_product_package',
    2239: 'invalid_product_category',
    2240: 'exist_product_id',
    2241: 'exist_product_name',
    2249: 'announcement_content_required',
    2250: 'invalid_index',
    2251: 'invalid_publish_status',
    2252: 'invalid_announcement_name',
    2253: 'announcement_id_required',
    2254: 'announcement_not_found',
    2255: 'invalid_announcement_platform',
    2256: 'invalid_announcement_search',
    2257: 'customer_type_required',
    2258: 'owner_not_found',
    2259: 'invalid_user_id',
    2260: 'invalid_faq_platform',
    2261: 'invalid_contact_id',
    2262: 'contact_not_found',
    2263: 'invalid_contact_status',
    2264: 'invalid_email',
    2265: 'issues_title_required',
    2266: 'issues_content_required',
    2267: 'issues_id_required',
    2268: 'issues_not_found',
    2269: 'invalid_issues_status',
    2270: 'issues_email_required',
    2271: 'issues_name_required',
    2272: 'invalid_issues_assign_role',
    2273: 'invalid_issues_assign_id',
    2274: 'issues_assigner_not_found',
    2275: 'product_subscribed',
    2276: 'middle_order_id_required',
    2277: 'sale_portal_order_name_required',
    2278: 'sale_portal_order_id_required',
    2279: 'sale_portal_order_start_date_required',
    2280: 'sale_portal_order_end_date_required',
    2281: 'sale_portal_order_status_required',
    2282: 'invalid_sale_portal_order_status',
    2283: 'invalid_sale_portal_order_start_date',
    2284: 'invalid_sale_portal_order_end_date',
    2285: 'product_order_not_found',
    2286: 'invalid_upload_position',
    2287: 'invalid_remove_data',
    2288: 'image_not_found',
    2289: 'invalid_edit_image_data',
    2290: 'only_edit_image_file',
    2291: 'invalid_notify_title',
    2292: 'invalid_notify_message',
    2293: 'invalid_notify_type',
    2294: 'invalid_notify_receiver',
    2295: 'notify_receiver_not_found',
    2296: 'notify_receiver_feature_issues',
    2999: 'default_permissions_missing',
    3000: 'restricted_user_activity',

    // Product feature issues
    3001: 'maximum_create_portfolio',
    3002: 'maximum_create_watchlist',
    3003: 'maximum_timeframe_market_status',
    3004: 'maximum_timeframe_datx_rating',
    3005: 'maximum_timeframe_index_rating',
    3006: 'maximum_create_1_portfolio',
    3007: 'maximum_create_5_portfolio',
    3008: 'maximum_create_1_watchlist',
    3009: 'maximum_create_5_watchlist',
    3010: 'invalid_associate_companies',
    3011: 'maximum_timeframe_1day_market_status',
    3012: 'maximum_timeframe_30mins_market_status',
    3013: 'maximum_timeframe_5mins_market_status',
    3014: 'maximum_timeframe_1day_datx_rating',
    3015: 'maximum_timeframe_30mins_datx_rating',
    3016: 'maximum_timeframe_5mins_datx_rating',
    3017: 'invalid_index_rating_permission',
    3018: 'maximum_timeframe_30mins_index_rating',
    3019: 'maximum_timeframe_5mins_index_rating',
    3020: 'maximum_timeframe_1day_index_rating',
    3021: 'invalid_notice_log_feature',
    3022: 'invalid_reply_support_feature',

    3023: "user_is_using_this_product",
    3024: "issues_content_admin_reply_required",
}