import {NgStyle} from '@angular/common';
import {Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import {ROUTE} from '~cn/core/model/route.enum';
import {ButtonComponent} from '~cn/shared/component/button/button/button.component';
import {LinkButtonComponent} from '~cn/shared/component/button/link-button/link-button.component';
import {SeparatorComponent} from '~cn/shared/component/separator/separator.component';

/**
 * Header component.
 *
 * @export
 * @class HeaderComponent
 * @typedef {HeaderComponent}
 */
@Component({
  selector: 'cn-header',
  standalone: true,
  imports: [
    NgStyle,
    MatMenuModule,
    MatIconModule,
    ButtonComponent,
    LinkButtonComponent,
    SeparatorComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  /**
   * Active route.
   *
   * @public
   * @type {!ROUTE}
   */
  @Input({required: true})
  public activeRoute!: ROUTE;

  /**
   * Whether the navigation floating menu is open.
   *
   * @public
   * @type {boolean}
   */
  public menuOpen = false;

  /**
   * Update the tracking of the floating menu's open state.
   *
   * @public
   */
  public onMenuOpen() {
    this.menuOpen = true;
  }

  /**
   * Update the tracking of the floating menu's open state.
   *
   * @public
   */
  public onMenuClose() {
    this.menuOpen = false;
  }
}
