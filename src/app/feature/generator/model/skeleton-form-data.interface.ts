import {MinecraftVersion} from './minecraft-version.type';

/**
 * Skeleton Generator form data.
 *
 * @export
 * @interface SkeletonFormData
 * @typedef {SkeletonFormData}
 */
export interface SkeletonFormData {
  /**
   * Available Minecraft versions.
   *
   * @type {MinecraftVersion}
   */
  minecraftVersion: MinecraftVersion;
  /**
   * Java group.
   *
   * @type {string}
   */
  group: string;
  /**
   * Mod authors.
   *
   * @type {string}
   */
  authors: string;
  /**
   * Mod title.
   *
   * @type {string}
   */
  modTitle: string;
  /**
   * Mod ID.
   *
   * @type {string}
   */
  modId: string;
  /**
   * Mod ID in kebab-case.
   *
   * @type {string}
   */
  modIdKebab: string;
  /**
   * GitHub user owning the repository.
   *
   * @type {string}
   */
  githubUser: string;
  /**
   * Mod description.
   *
   * @type {string}
   */
  description: string;
  /**
   * Whether it's a mod of the Crystal Nest.
   *
   * @type {boolean}
   */
  crystalNestMod: boolean;
  /**
   * Whether to auto-generate {@link modId} and {@link modIdKebab} according to {@link modTitle}.
   *
   * @type {boolean}
   */
  autogenModId: boolean;
}
