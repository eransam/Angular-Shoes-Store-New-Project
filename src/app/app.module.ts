import { ColorsService } from './services/colors.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { DiscountComponent } from './components/home-area/discount/discount.component';
import { SaleComponent } from './components/home-area/sale/sale.component';
import { BestProductComponent } from './components/home-area/best-product/best-product.component';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './components/home-area/order/order.component';
import { SloganComponent } from './components/home-area/slogan/slogan.component';
import { SpecialsComponent } from './components/home-area/specials/specials.component';
import { DessertsComponent } from './components/home-area/desserts/desserts.component';
import { TipComponent } from './components/home-area/tip/tip.component';
import { ColorBoxComponent } from './components/home-area/color-box/color-box.component';
import { CouponComponent } from './components/home-area/coupon/coupon.component';
import { LocationComponent } from './components/home-area/location/location.component';
import { PricingComponent } from './components/home-area/pricing/pricing.component';
import { SurveyComponent } from './components/home-area/survey/survey.component';
import { ClockComponent } from './components/home-area/clock/clock.component';
import { ColorfulComponent } from './components/home-area/colorful/colorful.component';
import { NumToWordPipe } from './pipes/num-to-word.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HelpComponent } from './components/home-area/help/help.component';
import { WinterDirective } from './directives/winter.directive';
import { WinterSaleComponent } from './components/home-area/winter-sale/winter-sale.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductCardComponent } from './components/products-area/product-card/product-card.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        HomeComponent,
        DiscountComponent,
        SaleComponent,
        BestProductComponent,
        OrderComponent,
        SloganComponent,
        SpecialsComponent,
        DessertsComponent,
        TipComponent,
        ColorBoxComponent,
        CouponComponent,
        LocationComponent,
        PricingComponent,
        SurveyComponent,
        ClockComponent,
        ColorfulComponent,
        NumToWordPipe,
        HighlightDirective,
        HelpComponent,
        WinterDirective,
        WinterSaleComponent,
        ProductListComponent,
        AboutComponent,
        PageNotFoundComponent,
        ProductCardComponent,
        ProductDetailsComponent,
        AddProductComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [],
    // providers: [ColorsService], // Angular creates object in application scope.
    bootstrap: [LayoutComponent]
})
export class AppModule { }
