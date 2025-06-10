import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CompanyInfoComponent } from './pages/company-info/company-info.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactCardsComponent } from './contact-cards/contact-cards.component';
import { ResearchSectionComponent } from './research-section/research-section.component';
import { CeoMessageComponent } from './ceo-message/ceo-message.component';
import { WhyWeDoComponent } from './why-we-do/why-we-do.component';
import { GrowWithGoogleComponent } from './grow-with-google/grow-with-google.component';
import { OutreachComponent } from './outreach/outreach.component';
import { InvestorRelationsComponent } from './investor-relations/investor-relations.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompanyInfoComponent,
    AboutComponent,
    ProductsComponent,
    NewsComponent,
    ContactCardsComponent,
    ResearchSectionComponent,
    CeoMessageComponent,
    WhyWeDoComponent,
    GrowWithGoogleComponent,
    OutreachComponent,
    InvestorRelationsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
